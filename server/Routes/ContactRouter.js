const { createContact, getContacts } = require("../Controllar/ContactControllar")

const ContactRouter = require("express").Router()

ContactRouter.post("/contact" ,createContact)
ContactRouter.get("/contact" ,getContacts)

module.exports = ContactRouter