class SensorApi {
  constructor() {
    this.url = 'http://dummy-sensors.azurewebsites.net';
  }

  getSensors() {
    return fetch(`${this.url}/api/sensor/`).then(response => response.json());
  }

  getSensor(sensorId) {
    return fetch(`${this.url}/api/sensor/${sensorId}`).then(response => response.json());
  }

  getWeather() {
    return fetch(`${this.url}/api/weather`).then(response => response.json());
  }
}

export default new SensorApi();
