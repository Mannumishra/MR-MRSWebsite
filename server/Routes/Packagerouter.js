const { craeteRecord, updateRecordById, getAllRecords, getRecordById, deleteRecordById } = require("../Controllar/PackageControllar")
const upload = require("../MiddleWare/Multer")

const packageRouer = require("express").Router()

packageRouer.post("/package", upload.fields([
    { name: "pic", maxCount: 1 },
    { name: "slideimage", maxCount: 10 }
]), craeteRecord)
packageRouer.put("/package/:_id", upload.fields([
    { name: "pic", maxCount: 1 },
    { name: "slideimage", maxCount: 10 },
]), updateRecordById)
packageRouer.get("/package", getAllRecords)
packageRouer.get("/package/:_id", getRecordById)
packageRouer.delete("/package/:_id", deleteRecordById)

module.exports = packageRouer