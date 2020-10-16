import React from "react";
import "./index.css";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { ProjectsContainer, NewHomePage, AboutPage } from "./containers";
import { TopNavBar } from "./v2/components";
import { LandingPage as HomePage } from "./v2/HomePage";
import { About } from "./v2/components";

function App() {
  return (
    <Router history={history}>
      {/* <TopNavBar /> */}
      <Route exact path="/" component={HomePage} />
      <Route path="/cognite" component={ProjectsContainer} />
      <Route path="/about" component={About} />
      {/* <Route exact path="/" component={NewHomePage} /> */}
      {/* <Route path="/about" component={AboutPage} /> */}
    </Router>
  );
}

export default App;
