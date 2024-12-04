const include = require("../Model/IncludeModel");
const { uploadImage } = require("../Utils/Cloudnary");
const fs = require("fs");

// Create a new record
const createRecord = async (req, res) => {
    try {
        const { includename } = req.body;
        if (!includename) {
            return res.status(400).json({
                success: false,
                message: "Include name is required"
            });
        }
        let data = new include({ includename });
        if (req.file) {
            const imgurl = await uploadImage(req.file.path);
            data.image = imgurl;
        }
        await data.save();
            try {
                fs.unlinkSync(req.file.path);
            } catch (error) {
                console.error("Error deleting file:", error);
            }
        res.status(201).json({
            success: true,
            message: "Package include created successfully",
            data: data
        });
    } catch (error) {
        console.error("Error creating package include:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


const getSingleRecord = async (req, res) => {
    try {
        const record = await include.findOne({ _id: req.params._id });
        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Package include not found"
            });
        }
        res.status(200).json({
            success: true,
            data: record
        });
    } catch (error) {
        console.error("Error fetching package include:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
// Get a single record by ID
const getRecord = async (req, res) => {
    try {
        const record = await include.find();
        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Package include not found"
            });
        }
        res.status(200).json({
            success: true,
            data: record
        });
    } catch (error) {
        console.error("Error fetching package include:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// Update a record by ID
const updateRecord = async (req, res) => {
    try {
        const record = await include.findOne({ _id: req.params._id });
        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Package include not found"
            });
        }
        if(record){
            record.includename=req.body.includename??record.includename
            if (req.file) {
                const imgurl = await uploadImage(req.file.path);
                record.image = imgurl;
            }
        }
        await record.save();
            try {
                fs.unlinkSync(req.file.path);
            } catch (error) {
                console.error("Error deleting file:", error);
            }
        res.status(200).json({
            success: true,
            message: "Package include updated successfully",
            data: record
        });
    } catch (error) {
        console.error("Error updating package include:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// Delete a record by ID
const deleteRecord = async (req, res) => {
    try {
        const record = await include.findOne({ _id: req.params._id });

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Package include not found"
            });
        }

        await record.deleteOne();

        res.status(200).json({
            success: true,
            message: "Package include deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting package include:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = {
    createRecord,
    getRecord,
    updateRecord,
    deleteRecord,getSingleRecord
};
