const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    where: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    numberofroom: { type: Number, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    hotelname: { type: String, required: true },
    hotelemail: { type: String, required: true },
    hotelphone: { type: String, required: true },
    hoteladdress: { type: String, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;