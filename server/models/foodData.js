import mongoose from "mongoose";
import { Schema } from "mongoose";

const foodSchema = new Schema({
  CategoryName: {
    type: String,
  },
  name: String,
  img: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
 const FoodSchema = mongoose.model("foodData", foodSchema);
 export default FoodSchema
