import express from "express";
import { getAllItems } from "../controllers/items-controllers.js";

const router = express.Router();

router.get("/", getAllItems);

export default router;
