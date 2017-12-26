import SensorApi from '../services/SensorApi';

export const getWeather = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_WEATHER' });
        SensorApi.getWeather()
            .then((response) => {
                dispatch({
                    type: 'GET_WEATHER',
                    temperature: response.temperature
                });
            });
    };
};