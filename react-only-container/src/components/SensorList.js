import React, { Component } from 'react';
import Sensor from './Sensor';

// class SensorList extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className="SensorList">
//                 Sensors: <select value={this.props.selectedId} onChange={this.props.handleChange}>
//                     {this.props.sensors.map(s => <option key={s.sensorId} value={s.sensorId}>{s.sensorId}</option>)}
//                 </select>
//                 {this.props.sensors.map(s => <Sensor key={s.sensorId} {...s} fetchData={this.props.fetchData} />)}
//             </div>
//         );
//     }
// }

// Stateless functional Component
const SensorList = (props) => {
    return (
        <div className="SensorList">
            Sensors: <select value={props.selectedId} onChange={props.handleChange}>
                {props.sensorIds.map(sensorId => <option key={sensorId} value={sensorId}>{sensorId}</option>)}
            </select>
            {props.sensorIds.map(sendorId => <Sensor key={sendorId} {...props.sensors[sendorId]} fetchData={props.fetchData} />)}
        </div>
    );
};

SensorList.prototype.propTypes = {
    selectedId: React.PropTypes.string,
    interval: React.PropTypes.number,
    handleChange: React.PropTypes.func,
    fetchData: React.PropTypes.func
};

export default SensorList;