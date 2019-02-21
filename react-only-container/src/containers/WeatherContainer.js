import React, { Component } from 'react';
import Weather from '../components/Weather';
import SensorApi from '../services/SensorApi';

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });

    SensorApi.getWeather().then(response => {
      this.setState(prevState => {
        return { temperature: response.temperature, loading: false };
      });
    });
  };

  render() {
    return <Weather {...this.state} fetchData={this.fetchData} />;
  }
}

export default WeatherContainer;
