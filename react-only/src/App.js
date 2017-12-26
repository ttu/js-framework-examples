import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SensorList from './components/SensorList';

class App extends Component {
  render() {
    const settings = { interval: 5000 };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SensorList {...settings} />
      </div>
    );
  }
}

export default App;
