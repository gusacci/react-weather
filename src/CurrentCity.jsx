import React from "react";
import "./CurrentCity.css";
import ReactAnimatedWeather from "react-animated-weather";

const CurrentCity = (props) => {
  return (
    <div>
      <div className="current-city">
        <div>
          <strong>{props.cityName},</strong> {props.country}
        </div>
        <div>{props.temp} °C</div>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={90}
          animate={true}
        />
      </div>
      <div className="dayToday">Monday, 14:45 </div>
    </div>
  );
};

export default CurrentCity;
