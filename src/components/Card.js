import React from "react";

export default function Card(props) {
  console.log(props);

  function KelvinToCelsius(num) {
    return (num - 273.15).toFixed(1);
  }

  return (
    <div className="App">
      <main>
        <h1>{props.data.name}</h1>
        <h2>{props.data.sys.country}</h2>
        <h3> {props.data.weather[0].description}</h3>
        <img
          src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
          alt="weather icon"
        />
        <p>Temp: {KelvinToCelsius(props.data.main.temp)}</p>
        <p>Feels like: {KelvinToCelsius(props.data.main.feels_like)}</p>
        <p>Temp min: {KelvinToCelsius(props.data.main.temp_min)}</p>
        <p>Temp max: {KelvinToCelsius(props.data.main.temp_max)}</p>
        <p>Humidity: {props.data.main.humidity}</p>
      </main>
    </div>
  );
}
