const { createRecord, updateRecord, getRecord, getSingleRecord, deleteRecord } = require("../Controllar/IncludeControllar")
const upload = require("../MiddleWare/Multer")

const includeRouter = require("express").Router()

includeRouter.post("/include" ,upload.single("image") , createRecord)
includeRouter.put("/include/:_id" ,upload.single("image") , updateRecord)
includeRouter.get("/include" , getRecord)
includeRouter.get("/include/:_id" , getSingleRecord)
includeRouter.delete("/include/:_id" , deleteRecord)

module.exports = includeRouter