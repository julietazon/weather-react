import React from "react";
import humidity from "./img/humidity_.png";
import thermo from "./img/thermo.png";
import wind from "./img/wind.png";

export default function WeatherProperties(props) {
  return (
    <div className="WeatherProperties">
      <ul>
        <li>
          <img
            src={humidity}
            alt="three little drops"
            className="TemperaturePropertiesIcon"
          />
          <span className="">{Math.round(props.data.humidity)}</span> %
        </li>
        <li>
          <img
            src={wind}
            alt="wind blowing"
            className="TemperaturePropertiesIcon"
          />
          <span className="">{Math.round(props.data.wind)}</span> km/h
        </li>
        <li>
          <img src={thermo} alt="thermometer" className="FeelsLikeIcon" />
          <span className="">{Math.round(props.data.feelsLike)}</span>°
        </li>
      </ul>
    </div>
  );
}
