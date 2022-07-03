import React, { useState } from "react";
import "./CurrentCity.css";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

const CurrentCity = (props) => {
  return (
    <div>
      <div className="current-city">
        <div>
          <strong>{props.data.city},</strong>
        </div>
        <div>{Math.round(props.data.temperature)} °C</div>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={90}
          animate={true}
        />
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
