import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./forecast.css";
import axios from "axios";

const Forecast = (props) => {
  return (
    <div className="forecast-column">
      <div>{props.weekDay}</div>
      <div>
        {" "}
        <ReactAnimatedWeather
          icon={props.icon}
          color="goldenrod"
          size={30}
          animate={true}
        />{" "}
      </div>
      <div>{props.temp} °</div>
    </div>
  );
};

export default Forecast;
