import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./forecast.css";

const Forecast = (props) => {
  return (
    <div className="forecast-column">
      <div>{props.weekDay}</div>
      <div>
        {" "}
        <ReactAnimatedWeather
          icon={props.icon}
          color="#ffb200"
          size={30}
          animate={true}
        />{" "}
      </div>
      <div>{props.temp} °</div>
    </div>
  );
};

export default Forecast;
