import React from 'react';

const Sensor = (props) => {
    return (
        <div>
            <p>{props.isSelected ? '* ' : ''}{props.sensorId}</p>
            <p>Temperature: {props.temperature}</p>
            <p>Interval: {props.interval}</p>
            <button onClick={() => props.fetchData(props.sensorId)}>Refresh</button>
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