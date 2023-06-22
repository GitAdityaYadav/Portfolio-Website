import "./projectCardStyles.css";
import React from "react";
import Work from "./work";
import workData from "./workData";
function ProjectCard(props){
    return(
        <div className="container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
            {workData.map(function(val,ind){
                return(
                    ind<props.size&&
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