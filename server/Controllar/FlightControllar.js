const flight = require("../Model/FlightModel");

const createFlight = async (req, res) => {
    try {
        console.log(req.body)
        const { from, to, departure, returnDate, totalPerson, name, email, phone, address } = req.body;
        const errorMessage = [];
        if (!from) errorMessage.push("From Date is must required");
        if (!to) errorMessage.push("To Date is must required");
        if (!departure) errorMessage.push("Departure date is must required");
        if (!totalPerson) errorMessage.push("Total number of persons is must required");
        if (!name) errorMessage.push("Name is must required");
        if (!email) errorMessage.push("Email is must required");
        if (!phone) errorMessage.push("Phone number is must required");
        if (!address) errorMessage.push("Address is must required");
        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(", "),
            });
        }
        const data = new flight({
            from,
            to,
            departure,
            returnDate,
            totalPerson,
            name,
            email,
            phone,
            address,
        });

        await data.save();
        res.status(200).json({
            success: true,
            message: "Request Send Successfully",
            data: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const getDetails = async(req,res)=>{
    try {
       const data = await flight.find() 
       if(!data){
        return res.status(404).json({
            success:false,
            message:"Details Not found"
        })
       }
       else{
        res.status(200).json({
            success:true,
            message:"Details Found Successfully",
            data:data
        })
       }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = {
    createFlight ,getDetails
}