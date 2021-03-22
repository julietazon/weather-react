import React from "react";
import clearDay from "./icons/01d.png";
import clearNight from "./icons/01n.png";
import partlyClearDay from "./icons/02d.png";
import partlyClearNight from "./icons/02n.png";
import partlyCloudyDay from "./icons/03d.png";
import partlyCloudyNight from "./icons/03n.png";
import cloudyDay from "./icons/04d.png";
import cloudyNight from "./icons/04n.png";
import rainyDay from "./icons/09d.png";
import rainyNight from "./icons/09n.png";
import veryRainyDay from "./icons/10d.png";
import veryRainyNight from "./icons/10n.png";
import stormyDay from "./icons/11d.png";
import stormyNight from "./icons/11n.png";
import snowyDay from "./icons/13d.png";
import snowyNight from "./icons/13n.png";
import foggyDay from "./icons/50d.png";
import foggyNight from "./icons/50n.png";

export default function WeatherIcon(props) {
  const fetchIcon = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyClearDay,
    "02n": partlyClearNight,
    "03d": partlyCloudyDay,
    "03n": partlyCloudyNight,
    "04d": cloudyDay,
    "04n": cloudyNight,
    "09d": rainyDay,
    "09n": rainyNight,
    "10d": veryRainyDay,
    "10n": veryRainyNight,
    "11d": stormyDay,
    "11n": stormyNight,
    "13d": snowyDay,
    "13n": snowyNight,
    "50d": foggyDay,
    "50n": foggyNight,
  };

  return (
    <img src={fetchIcon[props.code]} alt="weather" className="WeatherIcon" />
  );
}
