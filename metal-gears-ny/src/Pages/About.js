// import HomeDetails from "../Components/HomeDetails"
import "./About.css"
import redgreen from "../Components/Images/redgreen.jpeg"

import { NavLink } from "react-router-dom";

function About() {
   return (
     <main className="About">
   
<div className="left-div">
<NavLink to="/">    <h2> Back</h2></NavLink>
    <div className="one">  
    {/* <div className="font-top">We can service all of your needs</div> */}
       <p className="first-p">We specialize in repair/modification/fabrication of all things made in metal. Our capabilities include the following metals: Stainless, Steel, Aluminum, Brass, Bronze, Copper, and Zinc.
We provide expert work using the most appropriate fabrication techniques: MIG/TIG/STICK, PLASMA CUTTING and OXY/ACET.</p>

       </div> 
       <img src={redgreen} className="redgreen"/>
       </div>
     </main>
   );
 }
 
 export default About;
 

