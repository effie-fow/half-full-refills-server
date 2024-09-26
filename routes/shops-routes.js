import express from "express";
import {
  addShop,
  deleteShop,
  getAllShops,
  getIndividualShop,
  updateShopDetails,
  addShopsItems,
  checkShopExists,
} from "../controllers/shops-controllers.js";

const router = express.Router();

router.get("/", getAllShops);
router.get("/:id", getIndividualShop);
router.get("/find/address", checkShopExists);
router.post("/", addShop);
router.patch("/:id", updateShopDetails);
router.delete("/:id", deleteShop);
router.post("/items", addShopsItems);

export default router;
