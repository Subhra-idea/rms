import React from 'react'
import img from '../Imgs/memory.jpg'
import './AppBar.css'
import {GrAddCircle} from 'react-icons/gr';
import { NavLink } from "react-router-dom";
const AppBar = () => {
  return (
    <div className='Appbar-container'>
     <div className='Appbar'>
        <h2>Resturent Management System</h2>
        <img className='memory-img' src={img} alt="memory" />
      {/* <Link to="/addfood"><button>Add</button></Link> */}
      <NavLink to="/addfood">
      <GrAddCircle size={70}/>
      </NavLink>
    </div>
    </div>
   
  )
}

export default AppBar