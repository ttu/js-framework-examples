const weather = (state = { loading: false, temperature: Number.MIN_VALUE }, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        temperature: action.temperature,
        loading: false,
      };
    case 'LOADING_WEATHER':
      return {
        loading: true,
      };
    default:
      return state;
  }
};

export default weather;
