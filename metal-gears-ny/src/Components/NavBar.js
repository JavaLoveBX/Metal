import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import Logo from "./Images/12.png"
import "./NavBar.css"

export default function NavBar() {
  return (
     <nav>
    <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xxxl"
        bg="dark"
        variant="dark"
        
      >
        <ReactBootStrap.Navbar.Brand id="brand" href="/">
          <img src={Logo} className="logo"/>
    
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse  id="responsive-navbar-nav">
        <ReactBootStrap.Nav>
        {/* <Link to="/">Home</Link> */}
        <section className="top-nav">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </section>
        {/* <NavLink to="/shirts/new">Add New Shirt</NavLink> */}
        {/* <NavLink to="/users/login">Login</NavLink> */}
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      {/* <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/shirts">Shirts</Link>
      </h2>
      <button>
        <Link to="/shirts/new">Add New Shirt</Link>
      </button> */}
      </ReactBootStrap.Navbar>
      </nav>
  );
}
