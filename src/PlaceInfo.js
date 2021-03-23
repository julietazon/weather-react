import React from "react";
import AwesomeDate from "./AwesomeDate";

export default function PlaceInfo(props) {
  return (
    <div className="row PlaceInfo">
      <ul className="">
        <li className="PlaceInfo-city">
          <span>{props.data.city}</span>
          <span>, </span>
          <span>{props.data.country}</span>
        </li>
        <li>
          <span className="WeatherDescription">
            <AwesomeDate date={props.data.date} />
          </span>
        </li>
        <li className="WeatherDescription">{props.data.description}</li>
      </ul>
    </div>
  );
}
