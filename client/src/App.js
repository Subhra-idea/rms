import "./App.css";
import AppBar from "./components/AppBar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import FoodState from "./context/foodState";
import { BrowserRouter, Route, Routes, Path } from "react-router-dom";
import AddFood from "./Screens/AddFood";



function App() {
  return (
    <FoodState>
      <BrowserRouter>
       <AppBar />
       {/* <Modal/> */}
       <div>
        <Routes>
          <Route exact path="/addfood" element={<AddFood />} />
          <Route exact path="/" element={<Hero />} />
         
        </Routes>
       </div>
      </BrowserRouter>
    </FoodState>
  );
}

export default App;
