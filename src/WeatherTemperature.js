import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherDegrees from "./WeatherDegrees";

export default function WeatherTemperature(props) {
  return (
    <div className="d-flex justify-content-start WeatherTemperature">
      <div className="d-flex justify-content-start row">
        <div className="col MainWeatherIcon">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col MainWeatherDegrees">
          <WeatherDegrees celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
