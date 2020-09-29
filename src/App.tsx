import React from "react";
import "./index.css";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { ProjectsContainer, NewHomePage, AboutPage } from "./containers";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={NewHomePage} />
      <Route path="/cognite" component={ProjectsContainer} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}

export default App;
