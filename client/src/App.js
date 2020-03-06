import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="Content">
          <Switch>
            <Route exact path="/"><About /></Route>
            <Route exact path="/contact"><Contact /></Route>
            <Route exact path="/portfolio"><Portfolio /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
