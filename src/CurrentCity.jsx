import React, { useState } from "react";
import "./CurrentCity.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

const CurrentCity = (props) => {
  return (
    <div>
      <div className="current-city">
        <div>
          <strong>{props.data.city}</strong>
        </div>
        <div>{Math.round(props.data.temperature)} °C</div>
        <WeatherIcon code={props.data.icon} />
      </div>
      <div className="dayToday">
        <div>
          <FormattedDate date={props.data.date} />
        </div>
        <div>Max:{Math.round(props.data.maxTemp)}°C</div>
        <div>Min:{Math.round(props.data.minTemp)}°C</div>

        <div>{props.data.description}</div>
      </div>
    </div>
  );
};

export default CurrentCity;
