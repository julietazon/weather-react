import React, { useState } from "react";

export default function WeatherDegrees(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahren(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  let fahren = (props.celsius * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="container WeatherDegrees">
        <span className="MainTemperatureDegrees">
          {Math.round(props.celsius)}
        </span>
        <span className="MainTemperatureUnits">
          <span className="unit">°C</span> |{" "}
          <span href="/" onClick={showFahren}>
            °F
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="container WeatherDegrees">
        <span className="MainTemperatureDegrees">{Math.round(fahren)}</span>
        <span className="MainTemperatureUnits">
          <span href="/" onClick={showCelsius}>
            °C
          </span>{" "}
          | °F
        </span>
      </div>
    );
  }
}
