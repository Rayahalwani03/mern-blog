import bcryptjs from "bcryptjs";
import { errorHandler } from "../../utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "TPTPTPTP" });
};
// before reachinf for this func we need to make sure that
//the user is authunticated by checking the cookie of the browser
//func inside the utils

export const updateUser = async (req, res, next) => {
  //authrized to prevent the hackers from entering from the userid in the route
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "you are not allowed to update this user"));
  }

  //if the user doesnt exist

  const existingUser = await User.findById(req.params.userId);
  if (!existingUser) {
    return next(errorHandler(404, "User not found"));
  }

  if (req.body.password) {
    // Check if the new password is the same as the old password
    const isSamePassword = await bcryptjs.compare(
      req.body.password,
      existingUser.password
    );
    if (isSamePassword) {
      return next(
        errorHandler(
          400,
          "New password must be different from the old password"
        )
      );
    }
    //password at least 6 characters
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "password must be at least 6 characters"));
    }

    req.body.password = await bcryptjs.hash(req.body.password, 10);
  }

  
  if (req.body.username) {
    // Check if the username is already taken
    if (req.body.username !== existingUser.username) {
      const usernameExists = await User.findOne({
        username: req.body.username,
      });
      if (usernameExists) {
        return next(errorHandler(400, "Username is already taken"));
      }
    }
//username between7 and 20 characters
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(
          400,
          "username must be not less than 7 and not more than 20"
        )
      );
    }
    //no space
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "username most not has space"));
    }
    //no lowercase
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "username most be lowercase"));
    }
    //just letters and numbers
    if (!req.body.username.match(/^[a-z0-9]+$/)) {
      return next(errorHandler(400, "username most be letters and numbers"));
    }
}

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updateUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }

};
