import express from 'express'
import authUser from '../middlewears/authUser.js'

import { registerUser , loginUser, getProfile, updateProfile, bookAppointment, listAppointment} from '../controllers/userControl.js'
import upload from '../middlewears/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/update-profile',upload.single('image'), authUser, updateProfile )

userRouter.post('/book-appointment', authUser, bookAppointment)

userRouter.get('/appointments', authUser, listAppointment)
export default userRouter 