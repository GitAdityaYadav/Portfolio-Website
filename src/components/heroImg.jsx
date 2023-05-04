import "./heroStyles.css";
import React from "react";
import IntroImg from "../images/Intro-bg.jpg"; 
import { Link } from "react-router-dom";
function HeroImg(){
return(
<div className="hero">
    <div className="mask">
    <img className="intro-img" src={IntroImg} alt="BgImage"/>
    </div>
    <div className="content">
     <h1>Hi,I'm Aditya</h1>
     <p>I develop web applications</p>
        <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
</div>
);
}

export default HeroImg;