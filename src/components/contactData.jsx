import "./contactDataStyles.css";
import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function ContactData(){
    const navigate=useNavigate();
    const [users,setUsers]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    
    function handleInputs(event){
       const {name,value}=event.target;
       setUsers({...users,[name]:value});
    }

    function postData(event){
         event.preventDefault();
         if( users.name && users.email && users.subject && users.message){
            localStorage.setItem("name",users.name);
            localStorage.setItem("email",users.email);
            localStorage.setItem("subject",users.subject);
            localStorage.setItem("message",users.message);
            window.alert("Response recorded");
            navigate("/");
        }else{
            window.alert("Fill all the fields")
        }
        
    }
    return(
        <div className="form">
            <form>
                <label>Your Name</label>
                <input name="name" type="text" placeholder="Enter Full Name" value={users.name}
                onChange={handleInputs}
                ></input>

                <label>Email</label>
                <input name="email" type="email" placeholder="abc@123.gmail.com" value={users.email}
                onChange={handleInputs}
                ></input>

                <label>Subject</label>
                <input name="subject" type="text" value={users.subject}
                onChange={handleInputs}
                ></input>

                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Type your message here" 
                value={users.message}
                onChange={handleInputs}
                />
                <button onClick={postData} className="btn">Submit</button> 
            </form>
        </div>
    );
}

export default ContactData;