import React from "react";
import "./index.css";
import { Router, Route } from "react-router-dom";
import history from "./history";
import {
  ProjectsContainer,
  NewHomePage,
  InputPage,
  OutputPage,
  PortfolioPage,
  AboutPage,
} from "./containers";
import { RayTracer2 } from "./projects";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={NewHomePage} />
      <Route path="/cognite" component={ProjectsContainer} />
      <Route path="/crescendio" component={ProjectsContainer} />
      <Route path="/raytracer" component={ProjectsContainer} />
      {/* <Route path="/input" component={InputPage} /> */}
      {/* <Route path="/output" component={PortfolioPage} /> */}
      {<Route path="/about" component={AboutPage} />}
    </Router>
  );
}

export default App;
