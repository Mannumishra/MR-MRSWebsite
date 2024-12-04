const { createInquiry, getInquiries } = require("../Controllar/PackageInqueryControllar")

const PackageInquery = require("express").Router()

PackageInquery.post("/package-inquery" ,createInquiry)
PackageInquery.get("/package-inquery" ,getInquiries)

module.exports = PackageInquery