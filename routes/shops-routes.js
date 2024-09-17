import express from "express";
import initknex from "knex";
import configuration from "../knexfile.js";
import {
  addShop,
  deleteShop,
  getAllShops,
  getIndividualShop,
  updateShopDetails,
} from "../controllers/shops-controllers.js";

const knex = initknex(configuration);
const router = express.Router();

router.get("/", getAllShops);
router.get("/:id", getIndividualShop);
router.put("/", addShop);
router.patch("/:id", updateShopDetails);
router.delete("/:id", deleteShop);

export default router;
