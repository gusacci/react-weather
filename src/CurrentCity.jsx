import React from "react";
import "./CurrentCity.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

const CurrentCity = (props) => {
  return (
    <div>
      <div className="current-city">
        <div>
          <strong>{props.data.city}</strong>
        </div>

        <Temperature celsius={props.data.temperature} />
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
