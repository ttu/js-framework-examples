import SensorApi from '../services/SensorApi';
import { interval, selectedInterval } from '../properties/Sensor';

export const getSensors = () => {
    return dispatch => {
        SensorApi.getSensors()
            .then((response) => {
                dispatch({
                    type: 'GET_SENSORS',
                    response
                })
            });
    };
}

export const getSensorData = (sensorId) => {
    return dispatch => {
        SensorApi.getSensor(sensorId)
            .then(response => {
                dispatch({
                    type: 'GET_SENSOR_DATA',
                    response
                })
            });
    };
}

export const handleChange = (sensorId) => ({
    type: 'HANDLE_CHANGE',
    sensorId
});