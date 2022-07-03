import React, { useState } from "react";

const Temperature = (props) => {
  const [unit, Setunit] = useState(`celsius`);
  const convertToFahrenheit = (event) => {
    event.preventDefault();
    Setunit("Fahrenheit");
  };
  const convertToCelcius = (event) => {
    event.preventDefault();
    Setunit("celsius");
  };
  if (unit === `celsius`) {
    return (
      <div>
        {Math.round(props.celsius)}
        <sup>
          °C
          <a href="#" onClick={convertToFahrenheit}>
            {" "}
            | °F
          </a>
        </sup>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        {Math.round(fahrenheit)}
        <sup>
          °F{" "}
          <a href="#" onClick={convertToCelcius}>
            | °C
          </a>
        </sup>
      </div>
    );
  }
};

export default Temperature;
