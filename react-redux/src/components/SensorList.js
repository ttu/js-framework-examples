import React from 'react';
import PropTypes from 'prop-types';
import Sensor from './Sensor';

const SensorList = props => {
  return (
    <div className="SensorList">
      <label>Sensors:</label>
      <select value={props.selectedId} onChange={props.handleChange}>
        {props.sensorIds.map(sensorId => (
          <option key={sensorId} value={sensorId}>
            {sensorId}
          </option>
        ))}
      </select>
      {props.sensorIds.map(sendorId => (
        <Sensor key={sendorId} {...props.sensors[sendorId]} fetchData={props.fetchData} />
      ))}
    </div>
  );
};

SensorList.prototype.propTypes = {
  selectedId: PropTypes.string,
  sensorIds: PropTypes.array,
  interval: PropTypes.number,
  handleChange: PropTypes.func,
  fetchData: PropTypes.func,
};

export default SensorList;
