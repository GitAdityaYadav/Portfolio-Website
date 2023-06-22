import React from "react";
import Navbar from "../components/navbar";
import HeroImg from "../components/heroImg";
import Footer from "../components/footer";
import ProjectCard from "../components/projectCard";
function Home() {
  return (
    <div>
    <Navbar/>
   <HeroImg />
   <ProjectCard size={3} />
   <Footer/>
    </div>
   
  );
}

export default Home;