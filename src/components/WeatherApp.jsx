import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import { getCity } from "../api/weatherApi";
import WeatherMainInfo from "./WeatherMainInfo";
import "./weatherApp.css";
import Loading from "./Loading";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo(city = "Quito") {
    try {
      const result = await getCity(city);
      setWeather(result);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="weatherContainer">
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        App climpático 🌦️
      </h1>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading></Loading>}
      {weather == null ? <span>Ingrese una ciudad valida</span> : ` `}
    </div>
  );
}
