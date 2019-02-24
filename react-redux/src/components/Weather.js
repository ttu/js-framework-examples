import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ loading, temperature, getWeather }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : temperature === Number.MIN_VALUE ? (
        <p>Not fetch</p>
      ) : (
        <p>Temperature: {temperature}</p>
      )}
      <button onClick={getWeather}>Update</button>
    </div>
  );
};

Weather.prototype.defaultProps = {
  loading: false,
  temperature: Number.MIN_VALUE,
};

Weather.prototype.propTypes = {
  loading: PropTypes.bool,
  temperature: PropTypes.number,
  getWeather: PropTypes.func,
};

export default Weather;
