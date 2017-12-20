import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarComp from './AppBar.js';
import Atman from './Atman/Atman.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom' ;
import SelfCheck from './Atman/SelfCheck'


class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/SelfCheck' component={SelfCheck}/>
      </Switch>
      </MuiThemeProvider>
      </Router>
    );
  }
}

const Home = () => (
  <div className="App">
  <AppBarComp />
  <Atman />
  </div>
)

export default App;
