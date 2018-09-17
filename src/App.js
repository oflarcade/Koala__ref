import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './containers/Main/Main';
import Profile from './containers/Profile/Profile';
import About from './containers/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/Profile' component={Profile}  />
          <Route exact path='/About' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
