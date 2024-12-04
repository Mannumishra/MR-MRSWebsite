const PackageInquiry = require('../Model/PackageQueryModel');
const axios = require('axios'); // Assuming Hooda Pay uses REST APIs
require('dotenv').config(); // To securely use environment variables

// Create Inquiry and Initiate Payment
exports.createInquiry = async (req, res) => {
    try {
        const { packageCity, name, email, phone, address, amount } = req.body;

        // Validation
        const errorMessage = [];
        if (!packageCity) errorMessage.push("Package City is required");
        if (!name) errorMessage.push("Name is required");
        if (!email) errorMessage.push("Email is required");
        if (!phone) errorMessage.push("Phone number is required");
        if (!address) errorMessage.push("Address is required");
        if (!amount || amount <= 0) errorMessage.push("Valid amount is required");

        if (errorMessage.length > 0) {
            return res.status(401).json({
                success: false,
                message: errorMessage.join(", ")
            });
        }

        // Save Inquiry
        const newInquiry = new PackageInquiry({
            packageCity,
            name,
            email,
            phone,
            address
        });
        const savedInquiry = await newInquiry.save();

        // Initiate Payment via Hooda Pay
        const hoodaPayResponse = await axios.post(
            'https://api.hoodapay.com/initiate-payment', // Replace with Hooda Pay's actual endpoint
            {
                amount: amount * 100, // Assuming amount is in smallest currency unit (e.g., paise for INR)
                currency: 'INR',
                redirect_url: 'http://your-frontend-url.com/payment-status', // Frontend to handle success/failure
                customer: {
                    name: name,
                    email: email,
                    phone: phone
                },
                purpose: `Payment for package ${packageCity}`
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.HOODA_PAY_API_KEY}` // API key from env file
                }
            }
        );

        // Extract payment URL
        const { paymentUrl } = hoodaPayResponse.data;

        res.status(200).json({
            success: true,
            message: "Inquiry created and payment initiated",
            data: {
                inquiry: savedInquiry,
                paymentUrl: paymentUrl
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Get All Inquiries
exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await PackageInquiry.find();
        res.status(200).json({
            success: true,
            data: inquiries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Payment Webhook (Optional, depends on Hooda Pay)
exports.handlePaymentWebhook = async (req, res) => {
    try {
        const { payment_id, status } = req.body;

        // Validate and update inquiry/payment status in your database
        if (status === 'success') {
            console.log(`Payment successful: ${payment_id}`);
        } else {
            console.log(`Payment failed: ${payment_id}`);
        }

        res.status(200).send("Webhook received");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing webhook");
    }
};
