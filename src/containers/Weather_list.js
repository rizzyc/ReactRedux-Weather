import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    console.log(temps);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td width="30%">
          <Chart data={temps} color="orange" units="&#8451;" />
        </td>
        <td width="30%">
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td width="30%">
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8451;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidty (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
