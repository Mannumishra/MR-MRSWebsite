const mongoose = require("mongoose");

// const includeschema = new mongoose.Schema({
//     image: {
//         type: String,
//         required: [true, "Include image is must required"]
//     },
//     includename: {
//         type: String,
//         required: [true, "Include name is must required"]
//     }
// });

const packageSchema = new mongoose.Schema({
    packagecity: {
        type: String,
        required: [true, "Package City is must Required"]
    },
    packageheading: {
        type: String,
        required: [true, "Package Heading is must required"]
    },
    packagedescription: {
        type: String,
        required: [true, "Package Description is must required"]
    },
    packagedestination: {
        type: String,
        required: [true, "Package Description is must required"]
    },
    packagehighlight: {
        type: String,
        required: [true, "Package highlight is must required"]
    },
    packageprice: {
        type: Number,
        required: [true, "Package price is must required"]
    },
    packagedis: {
        type: Number,
        required: [true, "Package discount is must required"]
    },
    packagefinal: {
        type: Number,
        required: [true, "Package final price is must required"]
    },
    packageinclude: {
        type: String,
        required: [true, "Include package details is must required"]
    },
    day1: { type: String },
    day2: { type: String },
    day3: { type: String },
    day4: { type: String },
    day5: { type: String },
    day6: { type: String },
    day7: { type: String },
    day8: { type: String },
    pic: {
        type: String,
        required: [true, "Pic is must required"]
    },
    slideimage: {
        type: [String],
        required: [true, "slide image is must required"]
    }
});

const packagedetails = mongoose.model("package", packageSchema);

module.exports = packagedetails;
