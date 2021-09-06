// import logo from './logo.svg';
// import './App.css';
import React from 'react';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Gallery from "./Pages/Gallery.js";
import Home from "./Pages/Home.js";
import Contact from "./Pages/Contact.js";
import About from "./Pages/About.js";
import Services from "./Pages/Services.js";
// import Footer from "./Pages/Footer"
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar className="nav"/>
          <Switch>
            {/* <Route exact path="/shirts/:id/edit">
              <Edit />
            </Route> */}
            {/* <Route exact path="/shirts/new">
              <New />
            </Route> */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/gallery">
              <Gallery/>
            </Route>
            <Route exact path="/services">
              <Services/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            {/* <Route exact path="/users/login/">
              <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/users/login/new_user">
              <NewUser />
            </Route>
            <Route exact path="/users/login/">
              <Login />
            </Route>
            <Route exact path="/users/login/new_user">
              <NewUser />
            </Route>
            <Route exact path="/">
              <Home />
            </Route> */}
              <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;






