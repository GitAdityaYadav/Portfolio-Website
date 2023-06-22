import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import ProjectCard from "../components/projectCard";
function Project() {
  return (
   <div>
    <Navbar />
    <HeroImg2 
      heading="PROJECTS"
      text="Some of my recent work."
    />
    <ProjectCard size={10}/>
    <Footer />
   </div>
  );
}

export default Project;