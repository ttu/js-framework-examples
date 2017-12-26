import React, { Component } from 'react';
import Sensor from './Sensor';
import SensorApi from '../services/SensorApi';

class SensorList extends Component {
    constructor(props) {
        super(props);
        this.state = { sensors: [], selected: {} };
    }

    static propTypes = {
        interval: React.PropTypes.number
    };

    componentDidMount() {
        this.fetchSensors();
    }

    handleChange = (event) => {
        this.update(event.target.value);
    }

    update = (selctedId) => {
        const updated = this.state.sensors.map(s => {
            return { id: s.id, interval: s.id === selctedId ? 500 : this.props.interval, selected: s.id === selctedId }
        });

        this.setState({ sensors: updated, selected: selctedId });
    }

    fetchSensors = () => {
        SensorApi.getSensors()
            .then((response) => {
                const newSensors = response.map((s, idx) => {
                    return { id: s, interval: idx === 0 ? 500 : this.props.interval, selected: idx === 0 }
                });
                this.setState({ sensors: newSensors, selected: newSensors[0].id });
            });
    };

    render() {
        return (
            <div className="SensorList">
                Sensors: <select value={this.state.selected} onChange={this.handleChange}>
                    {this.state.sensors.map(s => <option value={s.id}>{s.id}</option>)}
                </select>
                {this.state.sensors.map(s => <Sensor {...s} selected={s.selected} sensorId={s.id} />)}
            </div>
        );
    }
}

export default SensorList;