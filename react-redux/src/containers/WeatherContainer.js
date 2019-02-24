import { connect } from 'react-redux';
import { getWeather } from '../actions/Weather';

import Weather from '../components/Weather';

const mapStateToProps = state => {
  // weather: { loading: true, temperature: 0 }
  return state.weather;
};

const mapDispatchToProps = dispatch => {
  dispatch(getWeather());
  return {
    getWeather: () => {
      dispatch(getWeather());
    },
  };
};

const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);

export default WeatherContainer;
