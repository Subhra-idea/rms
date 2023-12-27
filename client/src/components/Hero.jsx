import React, { useContext } from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import contextvalue from "../context/foodContext"
// import { useContext } from "react";
import "./Hero.css"

const Hero = () => {
  const fooditem = useContext(contextvalue)
  const {food, getFood} = fooditem

useEffect(() =>{
  getFood()
},[])
  return (
    <div className="hero">
       
      {food.map((item)=>{
        return <Card key={item._id} item ={ item}/>
      })}
    </div>
  );
};

export default Hero;
