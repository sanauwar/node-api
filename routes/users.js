import express from "express";
const router = express.Router();
import authenticateToken from "../middleware/auth.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

router.get("/", authenticateToken, async (req, res) => {
  const users = await User.find({});
  res.status(200).send({ status: "OK", data: users });
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ status: "FAILED", data: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });
    await user.save();
    res
      .status(201)
      .send({ status: "OK", data: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .send({ status: "FAILED", data: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .send({ status: "FAILED", data: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });
    res.status(200).send({ status: "OK", data: { user, token } });
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: error.message });
  }
});

export default router;
