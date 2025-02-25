import { errorHandler } from "../../utils/error.js";
import Post from "../models/post.model.js";

//request from the frontend 

//reuest:
// 1-body from the scheme 2-params=>link 3-header 4-query=>from the database
export const create = async (req, res, next) => {
  // for reqs we make them async from the db
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "you are not allowed to create a post ")); 
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "please fill all required fields "));
  }
  const slug = req.body.title
    .split(" ") // [learn, mern] // learn mern
    .join("-") // [learn-mern]
    .toLowerCase() // [learn-mern]
    .replace(/[^a-zA-Z0-9-]/g, ""); //"How to #Learn JavaScript!!! Effectively"
  //"How-to-Learn-JavaScript---Effectively"

  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost)
  } catch (error) {
    next(error);
  }
};
