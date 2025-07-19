 import express from 'express';
 import cors  from 'cors'

 import 'dotenv/config'
 import connectDb from './config/mongodb.js';
 import connectCloundinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

//  config app

const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloundinary()

// MiddleWears
app.use(express.json())
app.use(cors())

// api endPoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter) 
app.get('/', (req, res) => {
    res.send('API WORKING Great' )
} );

app.listen(port, ()=> console.log('Server Started', port))