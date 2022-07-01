import React, { useState } from "react";
import "./CurrentCity.css";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

const CurrentCity = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const showWeather = (response) => {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/01d@2x.png`,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  };

  if (weatherData.ready) {
    return (
      <div>
        <div className="current-city">
          <div>
            <strong>{weatherData.city},</strong> Ukraine
          </div>
          <div>{Math.round(weatherData.temperature)} °C</div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={90}
            animate={true}
          />
        </div>
        <div className="dayToday">
          <div>
            <FormattedDate date={weatherData.date} />
          </div>
          <div>Max:{Math.round(weatherData.maxTemp)}°C</div>
          <div>Min:{Math.round(weatherData.minTemp)}°C</div>

          <div>{weatherData.description}</div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=8dcad96194c2621f5d4994f270da4f09&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return <p>Loading ...</p>;
  }
};

export default CurrentCity;
