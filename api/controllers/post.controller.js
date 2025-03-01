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
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const getposts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
  
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const posts = await Post.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: req.query.postId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $rgex: req.query.searchTerm, $options: "i" } },
          { content: { $rgex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPosts = await Post.countDocuments();
    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1, 
      now.getDate()
    );

    const lastMonthPosts = await Post.countDocuments({
      createdAt: {$gte: oneMonthAgo},
    });

    res.status(200).json({
      posts,
      totalPosts,
      lastMonthPosts,
    })
  } catch (error) {
    next(error);
  }
};
