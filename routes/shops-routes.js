import express from "express";
import initknex from "knex";
import configuration from "../knexfile.js";
import {
  addShop,
  getAllShops,
  getIndividualShop,
} from "../controllers/shops-controllers.js";

const knex = initknex(configuration);
const router = express.Router();

router.get("/", getAllShops);
router.get("/:id", getIndividualShop);
router.put("/", addShop);

export default router;
