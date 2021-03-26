import React from "react";

import "./ForecastDay.scss";

const ForecastDay = ({ day, minTemp, maxTemp, icon }) => {
  return (
    <div className="forecastDay">
      <div className="forecastDay__day">{day}</div>
      <div className="forecastDay__img">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather-icon"
          className="forecastDay__img-src"
        />
      </div>
      <div className="forecastDay__max">{maxTemp}ºC</div>
      <div className="forecastDay__min">{minTemp}ºC</div>
    </div>
  );
};

export default ForecastDay;
