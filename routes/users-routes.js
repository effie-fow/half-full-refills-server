import { authorise } from "../middleware/auth.js";
import express from "express";
import "dotenv/config";
import {
  checkUserExists,
  getUserDetails,
  loginUser,
  registerUser,
} from "../controllers/users-controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/confirm", checkUserExists);
router.get("/profile", authorise, getUserDetails);

export default router;
