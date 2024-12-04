const packagedetails = require("../Model/PackageModel");
const { uploadImage } = require("../Utils/Cloudnary");
const fs = require("fs");

const craeteRecord = async (req, res) => {
    try {
        // console.log(req.body)
        // console.log(req.files)
        const { packagecity, packageheading, packagedescription,packagedestination, packagehighlight, packageprice, packagedis, packagefinal, packageinclude, day1, day2, day3, day4, day5, day6, day7, day8 } = req.body;
        if (!packagecity || !packageheading || !packagedescription || !packagehighlight || !packagedestination ||  !packageprice || !packageinclude) {
            return res.status(401).json({
                success: false,
                mess: "Please fill all required fields"
            });
        }

        const data = new packagedetails({
            packagecity,
            packageheading,
            packagedescription,
            packagedestination,
            packagehighlight,
            packageprice,
            packagedis,
            packagefinal,
            packageinclude,
            day1,
            day2,
            day3,
            day4,
            day5,
            day6,
            day7,
            day8
        });

        if (req.files) {
            if (req.files.pic && req.files.pic.length > 0) {
                const imgurl = await uploadImage(req.files.pic[0].path);
                data.pic = imgurl;
                try {
                    fs.unlinkSync(req.files.pic[0].path);
                } catch (error) { }
            }
            if (req.files.slideimage && req.files.slideimage.length > 0) {
                const slideImageUrls = [];
                for (let i = 0; i < req.files.slideimage.length; i++) {
                    const file = req.files.slideimage[i];
                    const imgurl = await uploadImage(file.path);
                    slideImageUrls.push(imgurl);
                    try {
                        fs.unlinkSync(file.path);
                    } catch (error) { }
                }
                data.slideimage = slideImageUrls;
            }
        }

        await data.save();
        return res.status(200).json({
            success: true,
            mess: "Package created successfully",
            data: data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            mess: "Internal server error"
        });
    }
};

const getAllRecords = async (req, res) => {
    try {
        const packages = await packagedetails.find();
        return res.status(200).json({
            success: true,
            mess: "Packages retrieved successfully",
            data: packages
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            mess: "Internal server error"
        });
    }
};

const getRecordById = async (req, res) => {
    try {
        const package = await packagedetails.findOne({ _id: req.params._id });
        if (!package) {
            return res.status(404).json({
                success: false,
                mess: "Package not found"
            });
        }
        return res.status(200).json({
            success: true,
            mess: "Package retrieved successfully",
            data: package
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            mess: "Internal server error"
        });
    }
};

const updateRecordById = async (req, res) => {
    try {
        const package = await packagedetails.findOne({ _id: req.params._id });
        if (!package) {
            return res.status(404).json({
                success: false,
                mess: "Package not found"
            });
        }

        package.packagecity = req.body.packagecity ?? package.packagecity;
        package.packageheading = req.body.packageheading ?? package.packageheading;
        package.packagedescription = req.body.packagedescription ?? package.packagedescription;
        package.packagehighlight = req.body.packagehighlight ?? package.packagehighlight;
        package.packageprice = req.body.packageprice ?? package.packageprice;
        package.packagedis = req.body.packagedis ?? package.packagedis;
        package.packagefinal = req.body.packagefinal ?? package.packagefinal;
        package.packageinclude = req.body.packageinclude ?? package.packageinclude;
        package.day1 = req.body.day1 ?? package.day1;
        package.day2 = req.body.day2 ?? package.day2;
        package.day3 = req.body.day3 ?? package.day3;
        package.day4 = req.body.day4 ?? package.day4;
        package.day5 = req.body.day5 ?? package.day5;
        package.day6 = req.body.day6 ?? package.day6;
        package.day7 = req.body.day7 ?? package.day7;
        package.day8 = req.body.day8 ?? package.day8;

        if (req.files) {
            if (req.files.pic && req.files.pic.length > 0) {
                const imgurl = await uploadImage(req.files.pic[0].path);
                package.pic = imgurl;
                try {
                    fs.unlinkSync(req.files.pic[0].path);
                } catch (error) { }
            }
            if (req.files.slideimage && req.files.slideimage.length > 0) {
                const slideImageUrls = [];
                for (let i = 0; i < req.files.slideimage.length; i++) {
                    const file = req.files.slideimage[i];
                    const imgurl = await uploadImage(file.path);
                    slideImageUrls.push(imgurl);
                    try {
                        fs.unlinkSync(file.path);
                    } catch (error) { }
                }
                package.slideimage = slideImageUrls;
            }
        }

        await package.save();
        return res.status(200).json({
            success: true,
            mess: "Package updated successfully",
            data: package
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            mess: "Internal server error"
        });
    }
};

const deleteRecordById = async (req, res) => {
    try {
        const package = await packagedetails.findOne({ _id: req.params._id });
        if (!package) {
            return res.status(404).json({
                success: false,
                mess: "Package not found"
            });
        }
        await package.deleteOne();
        return res.status(200).json({
            success: true,
            mess: "Package deleted successfully",
            data: package
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            mess: "Internal server error"
        });
    }
};

module.exports = {
    craeteRecord,
    getAllRecords,
    getRecordById,
    updateRecordById,
    deleteRecordById
};
