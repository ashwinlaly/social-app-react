import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './shared/Navbar';
import Home from './index/Home';
import Login from './index/Login';
import Signup from './index/Signup';

class App extends Component {
  
  render(){
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Signup}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
