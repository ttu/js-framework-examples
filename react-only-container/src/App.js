import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

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
        <div>
          <Link to="/weather">Weather</Link> <Link to="/sensors">Sensors</Link>
        </div>
        <Switch>
          <Route exact path="/" render={() => <h3>Hello</h3>} />
          <Route
            exact
            path="/weather"
            render={() => (
              <div>
                <h3>Weather</h3>
                <WeatherContainer />
              </div>
            )}
          />
          <Route
            exact
            path="/sensors"
            render={() => (
              <div>
                <h3>Sensors</h3>
                <SensorContainer />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
