import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import ContactData from "../components/contactData";

function Contact() {
  return (
    <div>
    <Navbar />
    <HeroImg2 
      heading="CONTACT"
      
    />
    <ContactData/>
    <Footer />
   </div>
  );
}

export default Contact;