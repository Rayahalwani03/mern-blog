import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body; // req header body... 

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {

    return res.status(400).json({
      message: "Please provide all the required fields"
    });
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
  }
  catch (err) {
      res.status(500).json({
        message: "Something went wrong",
        error: err.message });}
};

