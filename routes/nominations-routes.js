import express from "express";
import {
  getShopNominations,
  addShopNomination,
  deleteNomination,
  getNominationsItems,
} from "../controllers/nominations-controllers.js";

const router = express.Router();

router.get("/:id", getShopNominations);
router.post("/:id", addShopNomination);
router.delete("/:nominationId", deleteNomination);
router.get("/:nominationId/items", getNominationsItems);

export default router;
