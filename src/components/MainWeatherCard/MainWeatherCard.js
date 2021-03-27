import React from "react";
import { Row, Col } from "antd";

import "./MainWeatherCard.scss";

const MainWeatherCard = ({ cityInfo, isCurrentLocation }) => {
  const { city, country, temp, minTemp, maxTemp, icon } = cityInfo;
  return (
    <>
      <Row className="mainWeatherCard">
        <Col className="mainWeatherCard__left" span={24}>
          {temp}º C
        </Col>
        <Col className="mainWeatherCard__right" span={24}>
          <p className="mainWeatherCard__right-max">{maxTemp}º C</p>
        </Col>
        <Col className="mainWeatherCard__right" span={24}>
          <p className="mainWeatherCard__right-min">{minTemp}º C</p>
        </Col>
      </Row>
      {isCurrentLocation === true && (
        <Row>
          <strong>ubicación actual:</strong>
        </Row>
      )}
      <Row>{city}</Row>
      <Row>{country}</Row>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
      />
    </>
  );
};

export default MainWeatherCard;
