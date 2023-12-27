import React from "react";
import "./card.css"
import {  useContext} from "react";
import contextvalue from "../context/foodContext"
import Modaal from "./Modaal";
import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";
const Card = (props) => {
  const navigate = useNavigate();
  const fooditem = useContext(contextvalue)
  const {food, DeleteFood} = fooditem

  const {item} = props
const {CategoryName, name, img , description} = props 


  return (
    <div className="cards">
      
      <div className="card">
        <img src={item.img} alt="img" />
        <span>{item.CategoryName}</span>
        <span>{item.name}</span>
        <span>
          
          {" "}
          {item.description}
        </span>
        <Modaal id ={item._id} />
        
        <button onClick={()=>{
          DeleteFood(item._id)
        }}>delete</button>
      </div>
    </div>
  );
};

export default Card;
