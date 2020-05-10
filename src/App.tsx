import React from 'react';
import './App.css';
import { LandingPage } from "./LandingPage"
import './index.css';
import { Router, Route, Link } from 'react-router-dom';
import history from './history';
import {AboutPage} from "./AboutPage";
import {TopNavBar} from "./components/TopNavBar"

function App() {
  return (
    <Router history={history}>
      <div>
        <TopNavBar/>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
}

export default App;
