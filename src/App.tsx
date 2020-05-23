import React from "react";
import "./App.css";
import "./index.css";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import history from "./history";
import { AboutPage, LandingPage, ProjectsContainer } from "./containers";
import { TopNavBar, Footer } from "./components";
// import { NewHomePage } from "./containers/NewHomePage";

function App() {
  return (
    <Router history={history}>
      <div>
        {/* <NewHomePage /> */}
        <TopNavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cognite" component={ProjectsContainer} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
