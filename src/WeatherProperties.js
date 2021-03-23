import React from "react";
import humidity from "./img/humidity_.png";
import thermo from "./img/thermo.png";
import wind from "./img/wind.png";

export default function WeatherProperties(props) {
  return (
    <div className="WeatherProperties">
      <ul>
        <li>
          <span className="PropertiesIcon">
            <img
              src={humidity}
              alt="three little drops"
              className="TemperaturePropertiesIcon"
            />
          </span>
          <span className="Properties">{Math.round(props.data.humidity)}</span>{" "}
          %
        </li>
        <li>
          <span className="PropertiesIcon">
            <img
              src={wind}
              alt="wind blowing"
              className="TemperaturePropertiesIcon"
            />
          </span>
          <span className="Properties">{Math.round(props.data.wind)}</span> km/h
        </li>
        <li>
          <span className="PropertiesIcon">
            <img src={thermo} alt="thermometer" className="FeelsLikeIcon" />
          </span>
          <span className="Properties">{Math.round(props.data.feelsLike)}</span>
          °
        </li>
      </ul>
    </div>
  );
}
