import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
    };

    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    this.getGeoLocation();
  }

  async getGeoLocation() {
    // eslint-disable-next-line global-require
    const IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

    // eslint-disable-next-line max-len
    const ipgeolocationApi = new IPGeolocationAPI('bb5b861fc3b049e4b273f0727132adde');

    ipgeolocationApi.getGeolocation(this.handleResponse);
  }

  // eslint-disable-next-line class-methods-use-this
  handleResponse(json) {
    this.setState({ location: json });
  }

  render() {
    const { location } = this.state;

    return (
      <ul>
        <li>
          City:
          {location.state_prov}
        </li>
        <li>
          Country:
          {location.country_name}
        </li>
      </ul>
    );
  }
}

export default App;
