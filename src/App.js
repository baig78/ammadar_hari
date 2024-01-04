import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
