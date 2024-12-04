const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
    from: {
        type: String,
        required: [true, "Please fill Form details"]
    },
    to: {
        type: String,
        required: [true, "Please fill To details"]
    },
    departure: {
        type: Date,
        required: [true, "Please fill Date"]
    },
    returnDate: {
        type: Date,
        required: [true, "Please fill Return Date"]
    },
    totalPerson: {
        type: Number,
        required: [true, "fill Person details"]
    },
    name: {
        type: String,
        required: [true, "fill Name "]
    },
    email: {
        type: String,
        required: [true, "fill  Email"]
    },
    phone: {
        type: Number,
        required: [true, "fill Phone "]
    },
    address: {
        type: String,
        required: [true, "fill Address"]
    }

})

const flight = mongoose.model("flight" , flightSchema)

module.exports = flight