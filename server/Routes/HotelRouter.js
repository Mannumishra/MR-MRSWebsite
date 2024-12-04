const { createReservation, getReservations } = require("../Controllar/HoltelControllar")

const HotelRouter = require("express").Router()

HotelRouter.post("/hotel" ,createReservation)
HotelRouter.get("/hotel" ,getReservations)

module.exports = HotelRouter