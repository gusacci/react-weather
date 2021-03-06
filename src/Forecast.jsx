import React, { useState, useEffect } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastData from "./ForecastData";

const Forecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

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
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=8dcad96194c2621f5d4994f270da4f09&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
};

export default Forecast;
