const { createcity, getCity, getUpdateCity, getSingleCity, deleteCity } = require("../Controllar/CityControllar")
const upload = require("../MiddleWare/Multer")

const cityRouter = require("express").Router()

cityRouter.post("/city", upload.single("cityimage"), createcity)
cityRouter.put("/city/:_id", upload.single("cityimage"), getUpdateCity)
cityRouter.get("/city/:_id", getSingleCity)
cityRouter.get("/city", getCity)
cityRouter.delete("/city/:_id" , deleteCity)

module.exports = cityRouter