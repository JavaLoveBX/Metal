//  import ShirtsList from "../Components/ShirtsList";
// import Username from "../Components/Username";

import { NavLink } from "react-router-dom";
import sit from "../Components/Images/sit.jpg"
import weld from "../Components/Images/weld.jpg"
import rail from "../Components/Images/rail.jpg"
import stairs from "../Components/Images/stairs.jpg"
import "./Gallery.css"

function Gallery() {
  return (
    <main className="Gallery">
      {/* <NavLink to="/">    <h2> Back</h2></NavLink>
      <h2>Metal Gear</h2> */}
      {/* <Username currentUser={currentUser}/>*/}
      {/* <ShirtsList />  */}
      <ul className="pics">
        <li><img src={sit}/></li>
        <li><img src={weld}/></li>
        <li><img src={rail}/></li>
        <li><img src={stairs}/></li>
      

      </ul>
    </main>
  );
}

export default Gallery;
