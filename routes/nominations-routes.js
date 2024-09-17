import express from "express";
import {
  getShopNominations,
  addShopNomination,
  deleteNomination,
} from "../controllers/nominations-controllers.js";

const router = express.Router();

router.get("/:id/nominations", getShopNominations);
router.put("/:id/nominations", addShopNomination);
router.delete("/nominations/:nominationId", deleteNomination);

export default router;
