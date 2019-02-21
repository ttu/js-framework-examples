import React, { Component } from 'react';
import update from 'immutability-helper';
import { connect } from 'react-redux';
import { getSensors, getSensorData, handleChange } from '../actions/Sensors';

import SensorList from '../components/SensorList';
import { interval, selectedInterval } from '../properties/Sensor';

class SensorComponentContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSensors();

    this.intervalId = setInterval(() => {
      this.props.sensorIds.map(s => {
        if (!this.props.sensors[s].isSelected) this.props.getSensorData(s);
      });
    }, interval);

    this.selectedIntervalId = setInterval(() => {
      this.props.sensorIds.map(s => {
        if (this.props.sensors[s].isSelected) this.props.getSensorData(s);
      });
    }, selectedInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    clearInterval(this.selectedIntervalId);
  }

  render() {
    return <SensorList {...this.props} />;
  }
}

const mapStateToProps = state => state.sensors;

// const mapDispatchToProps = dispatch => {
//   return {
//     handleChange: event => {
//       const selctedId = event.target.value;
//       dispatch(handleChange(selctedId));
//     },
//     fetchData: id => {
//       dispatch(getSensorData(id));
//     },
//     getSensors: () => {
//       dispatch(getSensors());
//     }
//   };
// };

const SensorContainer = connect(
  mapStateToProps,
  { getSensors, getSensorData, handleChange }
)(SensorComponentContainer);

export default SensorContainer;
