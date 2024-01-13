import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import ChooseColor from "./components/chooseColor/ChooseColor";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/about" exact component={About} />
        </Switch>
        <ChooseColor />
        <Footer />
      </Router>
    </>
  );
}

export default App;
