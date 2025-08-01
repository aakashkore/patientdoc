
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'


// API for adding doctor 
const addDoctor = async ( req, res) =>{
    try {
       const{name, email , password, speciality, degree, experience, about, fees, address} = req.body 
        const imageFile = req.file
        console.log({name, email , password, speciality, degree, experience, about, fees, address},imageFile)
        
        // check data validiy
    if(!name || !email || !password || !speciality ||!degree || !experience || !about || !fees || !address){

        return res.json({success:false, message:'Missing details'})
    }
    // validate email
    if(!validator.isEmail(email)){
        return res.json({success:false, message: "Provide a valid email"})
    }
    if(!validator.isStrongPassword(password)){
        return res.json({success : false, message : "Enter a strong password"})
    }
    // Hashing passowrd
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    // upload image to cloudinary
    const imageUplaod  = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
    const imageUrl = imageUplaod.secure_url
    
    const doctorData = {
        name,
        email, 
        image:imageUrl,
        password:hashPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address: JSON.parse(address),
        date:Date.now()
    }
    const  newDoctor = new doctorModel(doctorData)
    await newDoctor.save()
    res.json({success:true, message:"Doctor added" })


}
     catch (error){
        console.log(error)
        res.json({success:false, message:error.msg})
    }
}

// api for admin login
const loginAdmin = async (req, res) => {
    try {
        const {email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid credentials"})
        }

    }
    catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API  to get all  doctors list for admin panel;

const allDoctors = async(req, res) => {
    try{
        const doctors = await doctorModel.find({}).select('-password')
        res.json({
            success:true, doctors
        })
    }
    catch(error){
        console.log(error)
        res.json({
            success:false, message:error.message
        })
    }
}
export {addDoctor,allDoctors, loginAdmin}