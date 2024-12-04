const Contact = require("../Model/ContactModel");

// Create a new contact
exports.createContact = async (req, res) => {
    try {
        const { name, email, phoneNumber, message } = req.body;
        let errors = [];
        if (!name) errors.push('Name is required.');
        if (!email) errors.push('Email is required.');
        if (!phoneNumber) errors.push('Phone number is required.');
        if (!message) errors.push('Message is required.');
        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                message: errors.join(",")
            });
        }
        const existingContact = await Contact.findOne({
            $or: [{ email }, { phoneNumber }]
        });

        if (existingContact) {
            return res.status(400).json({
                success: false,
                message: 'A contact with this email or phone number already exists.'
            });
        }
        const newContact = new Contact({ name, email, phoneNumber, message });
        await newContact.save();
        res.status(200).json({
            success: true,
            data: newContact,
            message:"Your Query Send Successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
