import React from "react";
import "./weatherMainInfo.css";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className="mainInfo">
      <div className="city">{weather?.location.country}</div>
      <div className="country">{weather?.location.name}</div>
      <div className="row">
        <img
          src={`http:${weather?.current.condition.icon}`}
          alt="clima"
          width="128px"
        />
        <div className="condition">
          <div className="condition">{weather?.current.condition.text}</div>
          <div className="current">{weather?.current.temp_c}°</div>
          <div>longitud: {weather?.location.lon}</div>
          <div>latitud: {weather?.location.lat}</div>
        </div>
      </div>
    </div>
  );
}
