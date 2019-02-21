import React from 'react';

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
  isSelected: false
};

Sensor.prototype.propTypes = {
  sensorId: React.PropTypes.string,
  temperature: React.PropTypes.number,
  interval: React.PropTypes.number,
  isSelected: React.PropTypes.bool,
  fetchData: React.PropTypes.func
};

export default Sensor;
