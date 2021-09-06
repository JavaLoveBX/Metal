// import HomeDetails from "../Components/HomeDetails"
 import "./Contact.css"
 import { NavLink } from "react-router-dom";

function Contact() {
   return (
     <main className="contact">
{/* <NavLink to="/">    <h2> Back</h2></NavLink> */}


       <address>

Nigel Franklin,<br></br>
Project Manager<br></br>
201.344.2737<br></br>
metalgearny@gmail.com<br></br>
</address>
<a href="mailto:metalgearny@gmail.com">Email Us</a>

     </main>
   );
 }
 
 export default Contact;
 

