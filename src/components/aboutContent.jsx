import "./aboutContentStyles.css";
import about1 from "../images/C.png";
import about2 from "../images/css-icon.png";
import about3 from "../images/html-icon.png";
import about4 from "../images/js.png";
import about5 from "../images/node-js-icon.png";
import about6 from "../images/react-js-icon.png";

function AboutContent(){
    return (
       <div className="about-container">
           
             <h1>Bonjour!</h1>
           <div className="about-container2">
           I am an enthusiastic web developer based in the beautiful city of Indore, India.
            My passion for coding and designing websites ignited when I first discovered the endless possibilities of computer science in high school. 
            Since then, I have embarked on a journey of continuous learning and self-improvement, 
            mastering various programming languages and web development frameworks along the way. 
            Whether it's crafting a visually stunning user interface or implementing complex back-end functionality,
             I am always driven to push my limits and create web experiences that leave a lasting impression.
          </div>
          <h1>Skills</h1>
          <div className="skills-container">
            
            <img src={about1} alt="C++ icon"/>
            <img src={about2} alt="Css icon" />
            <img src={about3} alt="html icon"/>
            <img src={about4} alt="Js icon"/>
            <img src={about5} alt="node icon"/>
            <img src={about6} alt="react icon"/>
          </div>
       </div>
    );
}

export default AboutContent;