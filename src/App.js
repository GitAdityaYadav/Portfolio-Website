import React from "react";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </div>
  );
}

export default App;
