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
  if (loaded && forecast.lat === props.lat && forecast.lon === props.lon) {
    console.log(forecast);
    return (
      <div className="container Forecast">
        <div className="row d-flex justify-content-center">
          <div className="col col-md-2 ForecastElement">
            <div className="row ForecastDate">
              <span className="col">
                {formatDay(forecast.daily[0].dt * 1000)}
              </span>
            </div>
            <div className="row">
              <div className="col">
                <WeatherIcon
                  code={forecast.daily[0].weather[0].icon}
                  alt="weather forecast"
                />
              </div>
            </div>
            <br />
            <div className="row ForecastTemperature">
              <div className="col d-flex flex-nowrap justify-content-center">
                <span className="MaxTemperature">
                  {Math.round(forecast.daily[0].temp.max)}°
                </span>
                <span className="MinTemperature">
                  <span> {Math.round(forecast.daily[0].temp.min)}°</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col col-md-2 ForecastElement">
            <div className="row ForecastDate">
              <span className="col">
                {formatDay(forecast.daily[1].dt * 1000)}
              </span>
            </div>
            <div className="row">
              <div className="col">
                <WeatherIcon
                  code={forecast.daily[1].weather[0].icon}
                  alt="weather forecast"
                />
              </div>
            </div>
            <br />
            <div className="row ForecastTemperature">
              <div className="col d-flex flex-nowrap justify-content-center">
                <span className="MaxTemperature">
                  {Math.round(forecast.daily[1].temp.max)}°
                </span>
                <span className="MinTemperature">
                  <span> {Math.round(forecast.daily[1].temp.min)}°</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col col-md-2 ForecastElement">
            <div className="row ForecastDate">
              <span className="col">
                {formatDay(forecast.daily[2].dt * 1000)}
              </span>
            </div>
            <div className="row">
              <div className="col">
                <WeatherIcon
                  code={forecast.daily[2].weather[0].icon}
                  alt="weather forecast"
                />
              </div>
            </div>
            <br />
            <div className="row ForecastTemperature">
              <div className="col d-flex flex-nowrap justify-content-center">
                <span className="MaxTemperature">
                  {Math.round(forecast.daily[2].temp.max)}°
                </span>
                <span className="MinTemperature">
                  <span> {Math.round(forecast.daily[2].temp.min)}°</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col col-md-2 ForecastElement">
            <div className="row ForecastDate">
              <span className="col">
                {formatDay(forecast.daily[3].dt * 1000)}
              </span>
            </div>
            <div className="row">
              <div className="col">
                <WeatherIcon
                  code={forecast.daily[3].weather[0].icon}
                  alt="weather forecast"
                />
              </div>
            </div>
            <br />
            <div className="row ForecastTemperature">
              <div className="col d-flex flex-nowrap justify-content-center">
                <span className="MaxTemperature">
                  {Math.round(forecast.daily[3].temp.max)}°
                </span>
                <span className="MinTemperature">
                  <span> {Math.round(forecast.daily[3].temp.min)}°</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col col-md-2 ForecastElement">
            <div className="row ForecastDate">
              <span className="col">
                {formatDay(forecast.daily[4].dt * 1000)}
              </span>
            </div>
            <div className="row">
              <div className="col">
                <WeatherIcon
                  code={forecast.daily[4].weather[0].icon}
                  alt="weather forecast"
                />
              </div>
            </div>
            <br />
            <div className="row ForecastTemperature">
              <div className="col d-flex flex-nowrap justify-content-center">
                <span className="MaxTemperature">
                  {Math.round(forecast.daily[4].temp.max)}°
                </span>
                <span className="MinTemperature">
                  <span> {Math.round(forecast.daily[4].temp.min)}°</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall?`;
    let apiKey = `fbea043a3c662cf4f3b5157ea45f2c8a`;
    let apiUrl = `${apiEndpoint}lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return (
      <div className="text-center Loader">
        <Loader type="ThreeDots" color="#D1E8F7" height={80} width={80} />
      </div>
    );
  }
}
