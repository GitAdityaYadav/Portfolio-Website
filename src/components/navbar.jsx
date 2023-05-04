import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {FaBars,FaTimes} from "react-icons/fa";
import Alogo from "../images/letter-a.png";
function Navbar() {

  const [click,setClick]=useState(false);
 function handleClick(){
  setClick(!click);
 }
 
 const [color,setColor]=useState(false);
 function changeColor(){
  if(window.scrollY >=100){
    setColor(true);
  }else{
    setColor(false);
  }
 }

 window.addEventListener("scroll",changeColor);
 
  return (
   <div className={color?"heading heading-bg":"heading"}>
     <Link to="/">
        <div className="logo">
        <h1> Portfolio</h1>
        <img src={Alogo} alt="A logo"></img>
        
        </div>
        
     </Link>

     <ul className={click?"nav active":"nav"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Projects</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
     </ul>
     <div className="hamBurger" onClick={handleClick}>
       {click?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
      
     </div>
   </div>
  );
}

export default Navbar;