import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { getFood, addFood, updateFood,deleteFood } from "../controller/food.js";
router.get("/", getFood);

router.post(
  "/addFood",
  [
    body("name", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid name").isLength({ min: 10 }),
  ],

  addFood
);

router.put(
  "/updateFood/:id",

  updateFood
);
router.delete(
  "/deleteFood/:id",

  deleteFood
);

export default router;
