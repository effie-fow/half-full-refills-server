import express from "express";
import {
  addShop,
  deleteShop,
  getAllShops,
  getIndividualShop,
  updateShopDetails,
} from "../controllers/shops-controllers.js";

const router = express.Router();

router.get("/", getAllShops);
router.get("/:id", getIndividualShop);
router.put("/", addShop);
router.patch("/:id", updateShopDetails);
router.delete("/:id", deleteShop);

export default router;
