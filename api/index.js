import Express from 'express'; // the app framework
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // for the env the env to not sow it in git
import userRoute from'./route/user.route.js'; // js is most and the userRoute cosider it as var and the app will know 

dotenv.config(); // to use the .env file

mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log('Connected to MongoDB');
}) 
.catch((error) => {
    console.log(error);    
})

const app = Express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); // عم يشغل السيرفر 
    
app.use('/api/user', (userRoute)); // we are going to use the get request