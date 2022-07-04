import React from "react";
import WeatherIcon from "./WeatherIcon";

const ForecastData = (props) => {
  const day = () => {
    const date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  };
  return (
    <div>
      {" "}
      <div>{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="temperature">
        {Math.round(props.data.temp.max)}°
        <span> {Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
};

export default ForecastData;
