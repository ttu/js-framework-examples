import React, { Component } from 'react';
import update from 'immutability-helper';
import SensorList from '../components/SensorList';
import SensorApi from '../services/SensorApi';

class SensorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { sensorIds: [], sensors: {}, selectedId: '' };
    };

    static defaultProps = {
        interval: 5000,
        selectedInterval: 1000
    };

    static propTypes = {
        interval: React.PropTypes.number,
        selectedInterval: React.PropTypes.number
    };

    componentDidMount() {
        this.fetchSensors();

        this.intervalId = setInterval(() => {
            this.state.sensorIds.map(s => {
                if (!this.state.sensors[s].isSelected)
                    this.fetchData(s);
            });
        }, this.props.interval);

        this.selectedIntervalId = setInterval(() => {
            this.state.sensorIds.map(s => {
                if (this.state.sensors[s].isSelected)
                    this.fetchData(s);
            });
        }, this.props.selectedInterval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        clearInterval(this.selectedIntervalId);
    }

    fetchSensors = () => {
        SensorApi.getSensors()
            .then((response) => {
                const sensorsObject = response.reduce((acc, cur, idx) => {
                    acc[cur] = { sensorId: cur, interval: idx === 0 ? this.props.selectedInterval : this.props.interval, isSelected: idx === 0, temperature: 0 }
                    return acc;
                }, {});

                this.setState({ sensorIds: Object.keys(sensorsObject), sensors: sensorsObject, selectedId: response[0] });
            });
    };

    fetchData = (sensorId) => {
        SensorApi.getSensor(sensorId)
            .then((response) => {
                this.setState(prevState => {
                    const updated = update(prevState.sensors, { [sensorId]: { temperature: { $set: response.data } } });
                    return { sensors: updated };
                });
            });
    };

    handleChange = (event) => {
        const selctedId = event.target.value;

        this.setState(prevState => {
            const sensorsObject = prevState.sensorIds.reduce((acc, cur, idx) => {
                return update(acc, {
                    [cur]: {
                        interval: {
                            $set: cur === selctedId
                                ? this.props.selectedInterval
                                : this.props.interval
                        },
                        isSelected: { $set: cur === selctedId }
                    }
                });
            }, prevState.sensors);

            return { sensors: sensorsObject, selectedId: selctedId }
        });
    }

    render() {
        const newProps = { ...this.props, ...this.state };
        return (
            <SensorList {...newProps} fetchData={this.fetchData} handleChange={this.handleChange} />
        );
    }
}

export default SensorContainer;