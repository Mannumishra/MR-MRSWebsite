const { createFlight, getDetails } = require("../Controllar/FlightControllar")

const FlightRouter = require("express").Router()

FlightRouter.post("/flight" , createFlight)
FlightRouter.get("/flight" , getDetails)

module.exports = FlightRouter