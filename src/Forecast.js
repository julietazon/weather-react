import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  function formatDay(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="row Forecast d-flex">
        <ul className="d-flex justify-content-between">
          <li className="">
            <h3 className="ForecastDate">
              {formatDay(forecast.daily[0].dt * 1000)}
            </h3>
            <div>
              <WeatherIcon
                code={forecast.daily[0].weather[0].icon}
                alt="weather forecast"
              />
            </div>
            <br />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast.daily[0].temp.max)}
              </span>
              <span>° </span>
              <span className="MinTemperature">
                <span>{Math.round(forecast.daily[0].temp.min)}</span>
                <span>°</span>
              </span>
            </div>
          </li>
          <li className="">
            <h3 className="ForecastDate">
              {formatDay(forecast.daily[0].dt * 1000)}
            </h3>
            <div className="">
              <WeatherIcon
                code={forecast.daily[1].weather[0].icon}
                alt="weather forecast"
              />
            </div>
            <br />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast.daily[1].temp.max)}
              </span>
              <span>° </span>
              <span className="MinTemperature">
                <span>{Math.round(forecast.daily[1].temp.min)}</span>
                <span>°</span>
              </span>
            </div>
          </li>

          <li className="">
            <h3 className="ForecastDate">
              {formatDay(forecast.daily[0].dt * 1000)}
            </h3>
            <div className="">
              <WeatherIcon
                code={forecast.daily[2].weather[0].icon}
                alt="weather forecast"
              />
            </div>
            <br />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast.daily[2].temp.max)}
              </span>
              <span>° </span>
              <span className="MinTemperature">
                <span>{Math.round(forecast.daily[2].temp.min)}</span>
                <span>°</span>
              </span>
            </div>
          </li>

          <li className="">
            <h3 className="ForecastDate">
              {formatDay(forecast.daily[0].dt * 1000)}
            </h3>
            <div className="">
              <WeatherIcon
                code={forecast.daily[3].weather[0].icon}
                alt="weather forecast"
              />
            </div>
            <br />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast.daily[3].temp.max)}
              </span>
              <span>° </span>
              <span className="MinTemperature">
                <span>{Math.round(forecast.daily[3].temp.min)}</span>
                <span>°</span>
              </span>
            </div>
          </li>

          <li className="">
            <h3 className="ForecastDate">
              {formatDay(forecast.daily[0].dt * 1000)}
            </h3>
            <div className="">
              <WeatherIcon
                code={forecast.daily[4].weather[0].icon}
                alt="weather forecast"
              />
            </div>
            <br />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast.daily[4].temp.max)}
              </span>
              <span>° </span>
              <span className="MinTemperature">
                <span>{Math.round(forecast.daily[4].temp.min)}</span>
                <span>°</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall?`;
    let apiKey = `fbea043a3c662cf4f3b5157ea45f2c8a`;
    let apiUrl = `${apiEndpoint}lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return (
      <div className="text-center">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
