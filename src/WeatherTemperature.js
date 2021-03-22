import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherDegrees from "./WeatherDegrees";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <ul>
        <li>
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </li>
        <li>
          <WeatherDegrees celsius={props.data.temperature} />
        </li>
      </ul>
    </div>
  );
}
