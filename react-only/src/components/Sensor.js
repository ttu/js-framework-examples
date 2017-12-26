import React, { Component } from 'react';
import SensorApi from '../services/SensorApi';

class Sensor extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: 0 };
    }

    static defaultProps = {
        interval: 2000,
        selected: false
    };

    static propTypes = {
        interval: React.PropTypes.number,
        selected: React.PropTypes.bool
    };

    componentDidMount() {
        this.fetchData();
        this.intervalId = setInterval(() => {
            this.fetchData();
        }, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.interval !== this.props.interval) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(() => {
                this.fetchData();
            }, nextProps.interval);
        }
    }

    fetchData = () => {
        SensorApi.getSensor(this.props.sensorId)
            .then((response) => {
                this.setState({ temperature: response.data });
            });
    }

    render() {
        return (
            <div>
                <p>{this.props.selected ? '* ' : ''}{this.props.sensorId}</p>
                <p>Temperature: {this.state.temperature}</p>
                <p>Interval: {this.props.interval}</p>
                <button onClick={this.fetchData}>Refresh</button>
            </div>
        );
    }
}


export default Sensor;