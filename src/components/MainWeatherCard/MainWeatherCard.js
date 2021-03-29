import React from "react";
import { Row, Col } from "antd";

import "./MainWeatherCard.scss";

const MainWeatherCard = ({ cityInfo, isCurrentLocation }) => {
  const { city, country, temp, minTemp, maxTemp, icon } = cityInfo;
  return (
    <>
      <Row>
        <Col className="mainWeatherCard">
          <Row>
            <p className="mainWeatherCard__element-main">
              <span data-testid="temp">{temp}</span>º C
            </p>
          </Row>
          <Row>
            <p className="mainWeatherCard__element-max">{maxTemp}º C</p>
          </Row>
          <Row>
            <p className="mainWeatherCard__element-min">{minTemp}º C</p>
          </Row>
        </Col>
      </Row>
      {isCurrentLocation === true && (
        <Row>
          <strong>ubicación actual:</strong>
        </Row>
      )}
      <Row>
        <span data-testid="city_name">{city}</span>
      </Row>
      <Row>
        <span data-testid="country_name">{country}</span>
      </Row>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
      />
    </>
  );
};

export default MainWeatherCard;
