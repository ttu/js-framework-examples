import update from 'immutability-helper';
import { GET_SENSORS, GET_SENSOR_DATA, HANDLE_CHANGE } from '../actions/Sensors';

const interval = 5000;
const selectedInterval = 500;

const sensors = (state = { sensorIds: [], sensors: {}, selectedId: '' }, action) => {
  switch (action.type) {
    case GET_SENSORS:
      const sensorsObj = action.response.reduce((acc, cur, idx) => {
        acc[cur] = {
          sensorId: cur,
          interval: idx === 0 ? selectedInterval : interval,
          isSelected: idx === 0,
          temperature: 0,
        };
        return acc;
      }, {});

      const data = {
        sensorIds: Object.keys(sensorsObj),
        sensors: sensorsObj,
        selectedId: action.response[0],
      };
      return { ...state, ...data };
    case HANDLE_CHANGE:
      const sensorsObject = state.sensorIds.reduce((acc, cur, idx) => {
        return update(acc, {
          [cur]: {
            interval: {
              $set: cur === action.sensorId ? selectedInterval : interval,
            },
            isSelected: { $set: cur === action.sensorId },
          },
        });
      }, state.sensors);
      return {
        ...state,
        sensors: sensorsObject,
        selectedId: action.sensorId,
      };
    case GET_SENSOR_DATA:
      const updated = update(state.sensors, {
        [action.response.id]: { temperature: { $set: action.response.data } },
      });
      return {
        ...state,
        sensors: updated,
      };
    default:
      return state;
  }
};

export default sensors;
