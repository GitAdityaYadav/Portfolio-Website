import "./projectCardStyles.css";
import React from "react";
import {NavLink} from "react-router-dom";

function Work(props){
    return(
        
        <div className="project-card">
            <img src={props.imgSrc} alt="Project"></img>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        
                        <div className="pro-btns">
                            
                            <NavLink to={props.source} className="btn">Source</NavLink>
                        </div>
                    </div>
        </div>
            
    );
}
export default Work;