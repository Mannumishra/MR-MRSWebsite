const city = require("../Model/Citymodel")
const { uploadImage, deleteImage } = require("../Utils/Cloudnary")
const fs = require("fs")

const createcity = async (req, res) => {
    try {
        console.log(req.body)
        const { cityname, domesinternal } = req.body
        if (!cityname) {
            return res.status(401).json({
                success: false,
                mess: "Fill all required field"
            })
        }
        const data = await city.findOne({ cityname: req.body.cityname })
        if (data) {
            return res.status(409).json({
                success: false,
                mess: "This city is already exits"
            })
        }
        else {
            let data = new city({ cityname, domesinternal })
            const imgurl = await uploadImage(req.file.path)
            data.cityimage = imgurl
            await data.save()
            try {
                fs.unlinkSync(req.file.path)
            } catch (error) { }
            res.status(200).json({
                success: true,
                mess: "City created successfully",
                data: data
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const getCity = async (req, res) => {
    try {
        let data = await city.find()
        if (data) {
            res.status(200).json({
                success: true,
                mess: "City found successfully",
                data: data
            })
        }
        else {
            res.status(404).json({
                success: false,
                mess: "City not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const getSingleCity = async (req, res) => {
    try {
        let data = await city.findOne({ _id: req.params._id })
        if (data) {
            res.status(200).json({
                success: true,
                mess: "City found successfully",
                data: data
            })
        }
        else {
            res.status(404).json({
                success: false,
                mess: "City not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const deleteCity = async (req, res) => {
    try {
        const data = await city.findOne({ _id: req.params._id })
        if (data) {
            if (data.cityimage) {
                const oldImage = data.cityimage.split("/").pop().split(".")[0]
                await deleteImage(oldImage)
            }
            await data.deleteOne()
            res.status(200).json({
                success: true,
                mess: "Record deleted"
            })
        }
        else {
            return res.status(403).json({
                success: false,
                mess: "Record not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: true,
            mess: "Internal Server Error"
        })
    }
}

const getUpdateCity = async (req, res) => {
    try {
        const existingCity = await city.findOne({ _id: req.params._id });
        if (!existingCity) {
            return res.status(404).json({
                success: false,
                mess: "Record not found"
            });
        }
        const duplicateCity = await city.findOne({ cityname: req.body.cityname });
        if (duplicateCity && duplicateCity._id.toString() !== req.params._id) {
            return res.status(409).json({
                success: false,
                mess: "This city already exists"
            });
        }
        existingCity.cityname = req.body.cityname ?? existingCity.cityname;
        existingCity.domesinternal = req.body.domesinternal ?? existingCity.domesinternal;
        if (req.file && req.file.path) {
            if (existingCity.cityimage) {
                const oldImage = existingCity.cityimage.split("/").pop().split(".")[0]
                await deleteImage(oldImage)
            }
            const imgurl = await uploadImage(req.file.path);
            existingCity.cityimage = imgurl;
            try {
                fs.unlinkSync(req.file.path);
            } catch (error) {
                console.error('Error removing file:', error);
            }
        }

        await existingCity.save();

        res.status(200).json({
            success: true,
            mess: "Record Updated",
            data: existingCity
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        });
    }
};


module.exports = {
    createcity: createcity,
    getCity: getCity,
    getSingleCity: getSingleCity,
    getUpdateCity: getUpdateCity,
    deleteCity: deleteCity
}