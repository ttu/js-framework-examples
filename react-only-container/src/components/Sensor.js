import React from 'react';
import PropTypes from 'prop-types';

// class Sensor extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.props.isSelected ? '* ' : ''}{this.props.sensorId}</p>
//                 <p>Temperature: {this.props.temperature}</p>
//                 <p>Interval: {this.props.interval}</p>
//                 <button onClick={() => this.props.fetchData(this.props.sensorId)}>Refresh</button>
//             </div>
//         );
//     }
// }

const Sensor = props => {
  return (
    <div>
      <p>
        {props.isSelected ? '* ' : ''}
        {props.sensorId}
      </p>
      <p>Temperature: {props.temperature}</p>
      <p>Interval: {props.interval}</p>
      <button onClick={() => props.fetchData(props.sensorId)}>Refresh</button>
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
