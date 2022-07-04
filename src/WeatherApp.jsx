import React, { useState } from "react";
import "./WeatherApp.css";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";
import axios from "axios";

const WeatherApp = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const showWeather = (response) => {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  };

  const search = () => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dcad96194c2621f5d4994f270da4f09&units=metric`;
    axios.get(apiUrl).then(showWeather);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (weatherData.ready) {
    return (
      <div>
        <div className="main-frame">
          <div>
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type a city ..."
                onChange={handleCityChange}
              />
              <button type="submit">Search</button>
              <button>📍</button>
            </form>
          </div>
          <CurrentCity data={weatherData} />
          <div>
            <Forecast coords={weatherData.coord} />
          </div>
        </div>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="mailto:anastaiagusakk@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Anastasia Gusak
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/gusacci/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              Netlify
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
};

export default WeatherApp;
