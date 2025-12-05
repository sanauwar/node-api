import express from "express";
import jwt from "jsonwebtoken"; // Corrected
const router = express.Router();
const SECRET_KEY = "your_secret_key"; // Replace with a strong secret in production

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default authenticateToken;
