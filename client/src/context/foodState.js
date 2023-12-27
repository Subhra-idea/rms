import React from "react";
import foodContext from "./foodContext";
import { useState } from "react";

const FoodState = (props) => {
 
  const foods = []
  const [food, setfood] = useState(foods);
//services
  const getFood= async()=>{
    const response = await fetch(`http://localhost:5000/food/`, {
      method: "GET",
      headers:{
        'content-type': 'application/json'
      },
     
    })

    const json =  await response.json()
    setfood(json)
    console.log(food)
  }

  const Addfood=async(CategoryName, name, img, description) =>{
    const response = await fetch(`http://localhost:5000/food/addFood`, {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({CategoryName, name, img, description})
    })
    const json =  response.json()
    console.log(json)
  //  const newitem =  {
    
  //       CategoryName: CategoryName,
  //       name: name,
  //       img: img,
  //       description: description,
  //       createdAt: "2023-10-09T12:20:08.344Z",
  //       __v: 0,
  //     }
  //   setfood(food.concat(newitem)) // concat() rturns an array where push() update an array
  }
  const DeleteFood =async (id)=>{
    const response = await fetch(`http://localhost:5000/food/deleteFood/${id}`, {
      method: "DELETE",
      headers:{
        'content-type': 'application/json'
      },
      
    })
    console.log(response)
    const json =  await response.json()

    const newFood = food.filter((food) => {
      return food._id !==id
    })
    setfood(newFood)
  }

  const EditFood =async (id, CategoryName, name, img, description)=>{

    const response = await fetch(`http://localhost:5000/food/updateFood/${id}`, {
      method: "PUT",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({CategoryName, name, img, description})
    })
    const json =  response.json()
  
    for(let i = 0;i<foods.length;i++){
      console.log(id)
      const element = food[i]
      if (element._id===id){
        element.CategoryName = CategoryName
        element.name = name
        element.img = img
        element.description = description
      }
    }

  }

  return <foodContext.Provider value={{food,  Addfood, getFood, EditFood,DeleteFood  }}>{props.children}</foodContext.Provider>;
};

export default FoodState;
