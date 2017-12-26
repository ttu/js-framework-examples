import React from 'react';

// Stateless functional Component
const Weather = (props) => {
    return (
        <div>
            {props.loading ? <p>Loading...</p> : <p>Temperature: {props.temperature}</p> }
            <button onClick={props.getWeather}>Update</button>
        </div>
    );
};

Weather.prototype.defaultProps = {
    loading: true,
    temperature: 0
};

Weather.prototype.propTypes = {
    loading: React.PropTypes.bool,
    temperature: React.PropTypes.number
};

export default Weather;