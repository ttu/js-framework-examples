import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ loading, temperature, getWeather }) => {
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Temperature: {temperature}</p>}
      <button onClick={getWeather}>Update</button>
    </div>
  );
};

Weather.prototype.defaultProps = {
  loading: true,
  temperature: 0,
};

Weather.prototype.propTypes = {
  loading: PropTypes.bool,
  temperature: PropTypes.number,
  getWeather: PropTypes.func,
};

export default Weather;
