const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    cityname: {
        type: String,
        required: [true, "City name is must required"]
    },
    domesinternal:{
        type: String,
        required: [true, "City name is must required"]
    },
    cityimage: {
        type: String,
        required: [true, "city image is must required"]
    }
})

const city = mongoose.model("City", citySchema)


module.exports = city