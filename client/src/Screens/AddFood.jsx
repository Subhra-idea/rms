import React, { useContext, useState } from "react";
import "./Addnote.css";
import contextvalue from "../context/foodContext";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const fooditem = useContext(contextvalue);
  const navigate = useNavigate();
  const { Addfood } = fooditem;
  const [food, setfood] = useState({
    CategoryName: "",
    name: "",
    img: "",
    description: "",
  });
  const onchange = (e) => {
    e.preventDefault()
    setfood({ ...food, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    Addfood(food.CategoryName, food.name, food.img, food.description);
    alert("Sucessfully added")
    navigate("/");
  }
  return (
    <div className="container">
      <form className="form" action="submit">
      <h1>Add a Food Item</h1>
      <input name='CatergoryName' placeholder="Catergory name" onChange={onchange} type="text" />
        <input name='name' placeholder=" name" onChange={onchange} type="text" />
        <input name='img' placeholder="img url" onChange={onchange} type="text" />
        <input name='description' placeholder="Description" onChange={onchange} type="text" />
        {/* <input placeholder="" onChange={onchange} type="text" /> */}
        <button className="btn" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default AddFood;
