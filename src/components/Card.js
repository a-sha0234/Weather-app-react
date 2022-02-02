import React from "react";

export default function Card(props) {
  //------------------------------------------------------------------------------------------
  // unit conversion
  //------------------------------------------------------------------------------------------

  function KelvinToCelsius(num) {
    //return celsius
    return (num - 273.15).toFixed(0);
  }

  //------------------------------------------------------------------------------------------
  // return JSX
  //------------------------------------------------------------------------------------------

  return (
    <div>
      <main className="card-data">
        <h1>{props.data.name}</h1>
        <h2>{props.data.sys.country}</h2>
        <h3> {props.data.weather[0].description}</h3>

        <img
          src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
          alt="weather icon"
        />
        <p>Temp: {KelvinToCelsius(props.data.main.temp)}°C</p>
        <p>Feels like: {KelvinToCelsius(props.data.main.feels_like)}°C</p>
        <p>Temp min: {KelvinToCelsius(props.data.main.temp_min)}°C</p>
        <p>Temp max: {KelvinToCelsius(props.data.main.temp_max)}°C</p>
        <p>Humidity: {props.data.main.humidity}%</p>
        <p>Wind speed: {props.data.wind.speed}m/s</p>
      </main>
    </div>
  );
}
