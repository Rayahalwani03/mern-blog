import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

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
})
    