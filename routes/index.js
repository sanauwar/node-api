import Router from "express";
const router = Router();
import users from "./users.js";
import blog from "./blogs.js";

router.use("/users", users);
router.use("/blog", blog);

export default router;
