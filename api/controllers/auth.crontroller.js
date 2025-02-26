import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../../utils/error.js";
import User from "../models/user.model.js";

//////////////
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body; // req header body...

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }
  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json("User created successfully");
  } catch (err) {
    next(err);
  }
};
////////////////////////

export const signin = async (req, res, next) => {
  const { email, password } = req.body; // req header body...

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign({ id: validUser._id, isAdmin:validUser.isAdmin}, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const facebook = async (req,res,next) =>{
  const {name, email, facebookPhotoUrl} = req.body;

  try{
    const user = await User.findOne({email}); // we can add it to reqursts
    if(user){ //_ for mongodb
      const token = jwt.sign({id: user._id , isAdmin: user.isAdmin}, process.env.JWT_SECRET);
      const {password, ...rest} = user._doc;
      res.status(200).cookie('access_token', token,{
        httpOnly:true,
      }).json(rest);
    }else {
      const generatedPassword = email + Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
      const newUser = new User({
        username:name.toLowerCase().split('').join('') + Math.random().toString(9).slice(-4),
        email,
        password:hashedPassword,
        profilePicture: facebookPhotoUrl,

      });
      await newUser.save();
      const token = jwt.sign({id: newUser._id, isAdmin: newUser.isAdmin}, process.env.JWT_SECRET);
      const {password, ...rest} = newUser._doc;
      res.status(200)
      .cookie('access_token', token, {
        httpOnly:true,
      }).json(rest);
    }
      
  }catch(error){
next(error);
  }

}


export const google = async (req, res, next) => {
  const {name, email, googlePhotoUrl} = req.body;

  try{
    const user = await User.findOne({email});
    if(user){
      const token = jwt.sign({id: user._id, isAdmin:user.isAdmin}, process.env.JWT_SECRET);
      const {password, ...rest} = user._doc;
      res.status(200).cookie('access_token', token,{
        httpOnly:true,
      }).json(rest);
    }else {
      const generatedPassword = email + Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
      const newUser = new User({
        username:name.toLowerCase().split('').join('') + Math.random().toString(9).slice(-4),
        email,
        password:hashedPassword,
        profilePicture: googlePhotoUrl,

      });
      await newUser.save();
      const token = jwt.sign({id: newUser._id, isAdmin: newUser.isAdmin}, process.env.JWT_SECRET);
      const {password, ...rest} = newUser._doc;
      res.status(200)
      .cookie('access_token', token,{
        httpOnly:true,
      }).json(rest);
    }
      
  }catch(error){
next(error);
  }
};
