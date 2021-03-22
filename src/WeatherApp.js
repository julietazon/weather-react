import React, { useState } from "react";
import PlaceInfo from "./PlaceInfo";
import WeatherTemperature from "./WeatherTemperature";
import WeatherProperties from "./WeatherProperties";
import Forecast from "./Forecast";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function search() {
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    const apiKey = `fbea043a3c662cf4f3b5157ea45f2c8a`;
    let apiUnits = `units=metric`;
    let apiUrl = `${apiEndpoint}q=${city}&APPID=${apiKey}&${apiUnits}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <header className="WeatherApp-search">
          <div className="d-flex justify-content-center Dictionary">
            <form onSubmit={handleSubmit} className="d-flex form">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button
                type="submit"
                value="Search"
                autoFocus="on"
                className="d-flex btn default SearchButton"
              ></button>
            </form>
          </div>
        </header>
        <main className="WeatherApp-main">
          <PlaceInfo data={weatherData} />
        </main>
        <aside className="WeatherApp-aside-1">
          <WeatherTemperature data={weatherData} />
        </aside>
        <aside className="WeatherApp-aside-2">
          <WeatherProperties data={weatherData} />
        </aside>
        <main className="WeatherApp-forecast">
          <Forecast />
        </main>
        <footer className="WeatherApp-footer"></footer>
      </div>
    );
  } else {
    search();
    return (
      <div className="text-center Loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={150}
          width={150}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
