import React from 'react';
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
        <Sensor
          key={sendorId}
          {...props.sensors[sendorId]}
          fetchData={props.fetchData}
        />
      ))}
    </div>
  );
};

SensorList.prototype.propTypes = {
  selectedId: React.PropTypes.string,
  sensorIds: React.PropTypes.array,
  interval: React.PropTypes.number,
  handleChange: React.PropTypes.func,
  fetchData: React.PropTypes.func
};

export default SensorList;
