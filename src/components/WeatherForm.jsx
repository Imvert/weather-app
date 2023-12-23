import React, { useState } from "react";
import "./weatherForm.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        type="text"
        placeholder="Write a city"
        className="input"
        required
        onChange={onChange}
      />
    </form>
  );
}
