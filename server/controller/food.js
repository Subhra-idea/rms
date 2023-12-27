import { validationResult } from "express-validator";
import FoodSchema from "../models/foodData.js";

export const getFood = async (res) => {
  try {
    const fooddatas = await FoodSchema.find();
    res.send(fooddatas);
  } catch (error) {
    res.status(404).json({ messag: error });
  }
};

export const addFood = async (req, res) => {
  const result = validationResult(req);
  
  if (!result.isEmpty()) {
    res.send("Enter valid details");
  } else {
    try {
      const foodItem = req.body;
      const newfood = new FoodSchema(foodItem);
      console.log(newfood);
      const saveFood = await newfood.save();
      res.status(200).json(saveFood);
    } catch (error) {
      res.status(404).json({ messag: error });
    }
  }
};

export const updateFood = async (req, res) => {
  try {
    const foodid = req.params.id;
    const foodItem = await FoodSchema.findById(foodid);
    // checking the fooditem available or not
    if (!foodItem) return res.send("No found");
    const newFood = {};
    const { CategoryName, name, img, description } = await req.json();
    if (CategoryName) newFood.CategoryName = CategoryName;
    if (name) newFood.name = name;
    if (img) newFood.img = img;
    if (description) newFood.description = description;

    const updatedFood = await FoodSchema.findByIdAndUpdate(
        foodid,
        { $set: newFood },
        { new: true }
    )
    console.log(updatedFood);
    
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const deleteFood = async (req, res) => {
  try {
    const foodid = req.params.id;
    const foodItem = await FoodSchema.findById(foodid);
    // checking the fooditem available or not
    if (!foodItem) return res.send("No found");
  
   
    const DeletedFood = await FoodSchema.findByIdAndDelete(foodid);
    
    
    res.status(200).json({
        "Sucsess": "Food item has been deleted",
        DeletedFood});
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};
