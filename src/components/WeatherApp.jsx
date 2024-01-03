import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import { getCity } from "../api/weatherApi";
import WeatherMainInfo from "./WeatherMainInfo";
import "./weatherApp.css";
import Loading from "./Loading";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [badRequest, setBadRequest] = useState(false);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo(city = "Quito") {
    try {
      const result = await getCity(city);
      if (result === undefined) {
        setBadRequest(true);
      } else {
        setBadRequest(false);
        setWeather(result);
      }
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
      {weather ? (
        <WeatherMainInfo weather={weather} />
      ) : (
        badRequest != <Loading></Loading>
      )}
      {weather === null ? (
        <span style={{ color: "red", fontSize: "20px" }}>
          Ingrese una ciudad valida
        </span>
      ) : (
        ` `
      )}
    </div>
  );
}
