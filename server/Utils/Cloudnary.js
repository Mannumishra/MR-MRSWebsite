const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const uploadImage = async (imgdata) => {
    try {
        const uploadfile = await cloudinary.uploader.upload(imgdata)
        return uploadfile.secure_url
    } catch (error) {
        console.log(error)
    }
}

const deleteImage = async(file)=>{
    try {
        await cloudinary.uploader.destroy(file)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    uploadImage ,deleteImage
}