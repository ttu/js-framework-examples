import React from 'react';
import PropTypes from 'prop-types';

const Sensor = ({ sensorId, temperature, interval, isSelected, fetchData }) => {
  return (
    <div>
      <p>{(isSelected ? '* ' : '') + sensorId}</p>
      <p>Temperature: {temperature}</p>
      <p>Interval: {interval}</p>
      <button onClick={() => fetchData(sensorId)}>Refresh</button>
    </div>
  );
};

Sensor.prototype.defaultProps = {
  interval: 20000,
  isSelected: false,
};

Sensor.prototype.propTypes = {
  sensorId: PropTypes.string,
  temperature: PropTypes.number,
  interval: PropTypes.number,
  isSelected: PropTypes.bool,
  fetchData: PropTypes.func,
};

export default Sensor;
