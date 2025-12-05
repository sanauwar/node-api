import express from "express";
import Blog from "../models/Blog.js";
import Logger from "../logger.js";
import authenticateToken from "../middleware/auth.js";
const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  const blogPost = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const blogResponse = await blogPost.save();
    if (blogResponse) {
      res.status(201).send("Blog post created");
    } else {
      res.status(400).send("Error creating blog post");
    }
  } catch (error) {
    Logger.error("Error creating blog post: ", error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * Get a blog post by User ID
 * GET /blog/:id
 */
router.get("/:userId", authenticateToken, async (req, res) => {
  try {
    const blogPosts = await Blog.find({ author: req.params.userId }).populate(
      "author"
    );
    if (blogPosts.length > 0) {
      res.status(200).json(blogPosts);
    } else {
      res.status(404).send("Blog post not found");
    }
  } catch (error) {
    Logger.error("Error fetching blog post: ", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
