import React, { Component } from 'react';
import update from 'immutability-helper';
import { connect } from 'react-redux'
import { getSensors, getSensorData, handleChange } from '../actions/Sensors'

import SensorList from '../components/SensorList';
import { interval, selectedInterval } from '../properties/Sensor';

class SensorComponentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { sensorIds: [], sensors: {}, selectedId: '' };
    };

    componentDidMount() {
        this.props.getSensors();

        this.intervalId = setInterval(() => {
            this.state.sensorIds.map(s => {
                if (!this.state.sensors[s].isSelected)
                    this.props.fetchData(s);
            });
        }, interval);

        this.selectedIntervalId = setInterval(() => {
            this.state.sensorIds.map(s => {
                if (this.state.sensors[s].isSelected)
                    this.props.fetchData(s);
            });
        }, selectedInterval);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        clearInterval(this.selectedIntervalId);
    }

    render() {
        return (
            <SensorList { ...{ ...this.state, ...this.props } } />
        );
    }
}

const mapStateToProps = (state) => {
    return state.sensors;
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getSensors());

    return {
        handleChange: (event) => {
            const selctedId = event.target.value;
            dispatch(handleChange(selctedId));
        },
        fetchData: (id) => {
            dispatch(getSensorData(id));
        },
        getSensors: () => {
            dispatch(getSensors());
        }
    }
}

const SensorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorComponentContainer)

export default SensorContainer


// class SensorContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { sensorIds: [], sensors: {}, selectedId: '' };
//     };

//     static defaultProps = {
//         interval: 5000,
//         selectedInterval: 1000
//     };

//     static propTypes = {
//         interval: React.PropTypes.number,
//         selectedInterval: React.PropTypes.number
//     };

//     componentDidMount() {
//         this.fetchSensors();

//         this.intervalId = setInterval(() => {
//             this.state.sensorIds.map(s => {
//                 if (!this.state.sensors[s].isSelected)
//                     this.fetchData(s);
//             });
//         }, this.props.interval);

//         this.selectedIntervalId = setInterval(() => {
//             this.state.sensorIds.map(s => {
//                 if (this.state.sensors[s].isSelected)
//                     this.fetchData(s);
//             });
//         }, this.props.selectedInterval);
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalId);
//         clearInterval(this.selectedIntervalId);
//     }

//     fetchSensors = () => {
//         props.dispatch(getSensors);
//     };

//     fetchData = (sensorId) => {
//         SensorApi.getSensor(sensorId)
//             .then((response) => {
//                 this.setState(prevState => {
//                     const updated = update(prevState.sensors, { [sensorId]: { temperature: { $set: response.data } } });
//                     return { sensors: updated };
//                 });
//             });
//     };

//     handleChange = (event) => {
//         const selctedId = event.target.value;

//         this.setState(prevState => {
//             const sensorsObject = prevState.sensorIds.reduce((acc, cur, idx) => {
//                 return update(acc, {
//                     [cur]: {
//                         interval: {
//                             $set: cur === selctedId
//                                 ? this.props.selectedInterval
//                                 : this.props.interval
//                         },
//                         isSelected: { $set: cur === selctedId }
//                     }
//                 });
//             }, prevState.sensors);

//             return { sensors: sensorsObject, selectedId: selctedId }
//         });
//     }

//     render() {
//         const newProps = { ...this.props, ...this.state };
//         return (
//             <SensorList {...newProps} fetchData={this.fetchData} handleChange={this.handleChange} />
//         );
//     }
// }

// export default SensorContainer;