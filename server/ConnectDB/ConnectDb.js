const mongoose = require("mongoose")

const getConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Databse is connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getConnect
}