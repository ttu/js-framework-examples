import React from 'react';

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
  temperature: 0
};

Weather.prototype.propTypes = {
  loading: React.PropTypes.bool,
  temperature: React.PropTypes.number,
  getWeather: React.PropTypes.func
};

export default Weather;
