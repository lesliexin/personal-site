import React from "react";
import "./App.css";
import "./index.css";
import { Router } from "react-router-dom";
// import { Route } from "react-router-dom";
import history from "./history";
// import { AboutPage } from "./AboutPage";
// import { TopNavBar, Footer } from "./components";
import { NewHomePage } from "./NewHomePage";
// import { LandingPage } from "./HomePage";

function App() {
  return (
    <Router history={history}>
      <div>
        <NewHomePage />
        {/* <TopNavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
