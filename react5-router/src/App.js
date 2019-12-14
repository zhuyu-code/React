import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';
import Dashboard from './component/Dashboard';
import Home from './component/Home'

export default class BasicExample extends Component {
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route>
              <Dashboard path='/dashboard'/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

