// import { useState } from 'react';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modaal.css"
import contextvalue from "../context/foodContext";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
function Modaal(props) {
  const [show, setShow] = useState(false);
  const fooditem = useContext(contextvalue);
  const navigate = useNavigate();
  const { Addfood, EditFood } = fooditem;
  const [food, setfood] = useState({
    CategoryName: "",
    name: "",
    img: "",
    description: "",
  });
  const onchange = (e) => {
    setfood({ ...food, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    
    console.log(props.id)
    EditFood( props.id, food.CategoryName, food.name, food.img, food.description);
    alert("Sucessfully updated")
    setShow(false);
    
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <button className='launch-btn' variant="primary" onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
     
          <Modal.Title> <h1>Add a Food Item</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
    <div className="form-conatiner">
    <form className="form" action="submit">
        <input name='CatergoryName' placeholder="Catergory name" onChange={onchange} type="text" />
        <input name='name' placeholder=" name" onChange={onchange} type="text" />
        <input name='img' placeholder="img url" onChange={onchange} type="text" />
        <input name='description' placeholder="Description" onChange={onchange} type="text" />
        {/* <input placeholder="" onChange={onchange} type="text" /> */}
      </form>
    
    </div>
        </Modal.Body>
        <Modal.Footer>
          <button class btn> Close</button>
          <button className="btn" onClick={handleClick} >Submit</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modaal;