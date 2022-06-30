import React from "react";
import "./WeatherApp.css";
import Search from "./Search";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

const WeatherApp = () => {
  return (
    <div className="main-frame">
      <Search />
      <CurrentCity cityName="Kiev" country="Ukraine" temp="17" />
      <div className="forecast">
        <Forecast weekDay="Mon" temp="20" icon="CLEAR_DAY" />
        <Forecast weekDay="Tue" temp="21" icon="RAIN" />
        <Forecast weekDay="Wed" temp="22" icon="WIND" />
        <Forecast weekDay="Thu" temp="22" icon="RAIN" />
        <Forecast weekDay="Fri" temp="22" icon="SLEET" />
      </div>
    </div>
  );
};

export default WeatherApp;
