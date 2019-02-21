import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ loading, temperature, fetchData }) => {
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Temperature: {temperature}</p>}
      <button onClick={fetchData}>Update</button>
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
  fetchData: PropTypes.func,
};

export default Weather;
