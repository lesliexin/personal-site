import React from "react";
import "./App.css";
import "./index.css";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import history from "./history";
import { ProjectsContainer } from "./containers";
import { AboutPage } from "./containers";
// import { TopNavBar, Footer } from "./components";
import { NewHomePage } from "./containers/NewHomePage";

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={NewHomePage} />
        <Route path="/cognite" component={ProjectsContainer} />
        <Route path="/about" component={AboutPage} />
        {/* <TopNavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cognite" component={ProjectsContainer} />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
