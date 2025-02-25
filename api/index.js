import express from 'express'; // the app framework
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // for the env the env to not show it in git
import userRoute from'./route/user.route.js'; // js is most and the userRoute cosider it as var and the app will know 
// js is most and the userRoute cosider it as var and the app will know
import authRoute from './route/auth.route.js'; // js is most and the userRoute cosider it as var and the app will know
import cookieParser from 'cookie-parser';
import postRoutes from './route/post.route.js'


dotenv.config(); // to use the .env file

mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log('Connected to MongoDB');
}) 
.catch((error) => {
    console.log(error);
})
const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); // عم يشغل السيرفر 


    
app.use('/api/user', userRoute); // we are going to use the get request
 // we are going to use the get request

 app.use('/api/auth', authRoute); // we are going to use the get request
 app.use('/api/post',  postRoutes); // we are going to use the get request



 app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({
        success: false,
        statusCode,
        message, 
    });
});
