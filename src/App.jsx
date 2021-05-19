import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Service";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/service" render={() => <Service />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
