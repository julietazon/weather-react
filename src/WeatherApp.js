import React, { useState } from "react";
import PlaceInfo from "./PlaceInfo";
import WeatherTemperature from "./WeatherTemperature";
import WeatherProperties from "./WeatherProperties";
import Forecast from "./Forecast";
import "./WeatherApp.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <header className="WeatherApp-search">
        <div className="d-flex justify-content-center Dictionary">
          <form className="d-flex form">
            <input
              type="search"
              className="form-control"
              autoComplete="off"
              autoFocus="on"
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
        <PlaceInfo />
      </main>
      <aside className="WeatherApp-aside-1">
        <WeatherTemperature />
      </aside>
      <aside className="WeatherApp-aside-2">
        <WeatherProperties />
      </aside>
      <main className="WeatherApp-forecast">
        <Forecast />
      </main>
      <footer className="WeatherApp-footer"></footer>
    </div>
  );
}
