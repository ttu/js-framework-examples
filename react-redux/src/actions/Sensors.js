import SensorApi from '../services/SensorApi';

export const GET_SENSORS = 'GET_SENSORS';
export const GET_SENSOR_DATA = 'GET_SENSOR_DATA';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const getSensors = () => {
  return dispatch => {
    SensorApi.getSensors().then(response => {
      dispatch({
        type: GET_SENSORS,
        response,
      });
    });
  };
};

export const getSensorData = sensorId => {
  return dispatch => {
    SensorApi.getSensor(sensorId).then(response => {
      dispatch({
        type: GET_SENSOR_DATA,
        response,
      });
    });
  };
};

export const handleChange = event => ({
  type: HANDLE_CHANGE,
  sensorId: event.target.value,
});
