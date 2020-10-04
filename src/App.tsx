import React from "react";
import "./index.css";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { ProjectsContainer, NewHomePage, AboutPage } from "./containers";
import { LandingPage as HomePage } from "./old/HomePage";

function App() {
  return (
    <Router history={history}>
      <HomePage />

      {/* <Route exact path="/" component={NewHomePage} />
      <Route path="/cognite" component={ProjectsContainer} />
      <Route path="/about" component={AboutPage} /> */}
    </Router>
  );
}

export default App;
