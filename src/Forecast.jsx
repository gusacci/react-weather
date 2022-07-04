import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import ForecastData from "./ForecastData";

const Forecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
  };

  if (loaded) {
    return (
      <div className="forecast-column">
        <ForecastData data={forecast[0]} />
        <ForecastData data={forecast[1]} />
        <ForecastData data={forecast[2]} />
        <ForecastData data={forecast[3]} />
        <ForecastData data={forecast[4]} />
      </div>
    );
  } else {
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=95d97ccda682cdc0d4123003baefd848&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
};

export default Forecast;
