import React, { Component } from 'react';
import update from 'immutability-helper';
import { connect } from 'react-redux'
import { getWeather } from '../actions/Weather'

import Weather from '../components/Weather';


const mapStateToProps = (state) => {
    return state.weather;
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getWeather());

    return {
        getWeather: () => {
            dispatch(getWeather());
        }
    }
}

const WeatherContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)

export default WeatherContainer