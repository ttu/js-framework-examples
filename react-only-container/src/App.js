import React, { Component } from 'react';
import { Router, Route, Link, browserHistory  } from 'react-router'

import logo from './logo.svg';
import './App.css';

import SensorContainer from './containers/SensorsContainer';
import WeatherContainer from './containers/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h3>Weather</h3>
        <WeatherContainer />
        <h3>Sensors</h3>
        <SensorContainer />
      </div>
    );
  }
}

export default App;
