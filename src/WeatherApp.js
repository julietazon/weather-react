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
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    let apiKey = `fbea043a3c662cf4f3b5157ea45f2c8a`;
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

  function showPosition(position) {
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    let apiKey = `fbea043a3c662cf4f3b5157ea45f2c8a`;
    let apiUnits = `units=metric`;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let local = "&lat=" + lat + "&lon=" + lon;
    let apiUrl = `${apiEndpoint}/data/2.5/weather?${local}&APPID=${apiKey}&${apiUnits}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="wrapper">
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
                >
                  Search
                </button>
                <button
                  className="btn btn-primary SearchButton Now"
                  type="submit"
                  onClick={getCurrentPosition}
                >
                  Now
                </button>
              </form>
            </div>
          </header>
          <main className="WeatherApp-main">
            <PlaceInfo data={weatherData} />
          </main>
          <aside className="aside WeatherApp-aside-1">
            <WeatherTemperature data={weatherData} />
          </aside>
          <aside className="aside WeatherApp-aside-2">
            <WeatherProperties data={weatherData} />
          </aside>
          <main className="WeatherApp-forecast">
            <Forecast lat={weatherData.lat} lon={weatherData.lon} />
          </main>
        </div>
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
