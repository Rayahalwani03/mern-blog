import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js'; // from utils dont forget to add js 

export const verifyToken = (req, res, next)=>{ 
    const token = req.cookies.access_token; // we name it access_token in the auth controller
    if(!token){
        return next(errorHandler(401, 'Unauthorized')); // next is middleware وسيط 
    }
   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err){
        return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();// go to the next func  in the router
   })
};



