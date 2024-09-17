import express from "express";
import initknex from "knex";
import configuration from "../knexfile.js";
import { addShop, getAllShops } from "../controllers/shops-controllers.js";

const knex = initknex(configuration);
const router = express.Router();

router.get("/", getAllShops);

router.put("/", addShop);

export default router;
