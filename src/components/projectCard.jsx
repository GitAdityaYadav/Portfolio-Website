import "./projectCardStyles.css";
import React from "react";
import Work from "./work";
import workData from "./workData";
function ProjectCard(){
    return(
        <div className="container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
            {workData.map(function(val,ind){
                return(
                    <Work
                        key={ind}
                        imgSrc={val.imgSrc}
                        title={val.title}
                        source={val.source}
                    />
                )
            })}
            </div>
        </div>
    );
}
export default ProjectCard;