import express from "express";
import {
  addShop,
  deleteShop,
  getAllShops,
  getIndividualShop,
  updateShopDetails,
  addShopsItems,
} from "../controllers/shops-controllers.js";

const router = express.Router();

router.get("/", getAllShops);
router.get("/:id", getIndividualShop);
router.put("/", addShop);
router.patch("/:id", updateShopDetails);
router.delete("/:id", deleteShop);
router.put("/items", addShopsItems);

export default router;
