import React from "react";
import { Row, Col } from "antd";

import "./MainWeatherCard.scss";

const MainWeatherCard = ({
  city,
  countryCode,
  temperature,
  minTemp,
  maxTemp,
  icon,
}) => {
  return (
    <>
      <Row className="mainWeatherCard">
        <Col className="mainWeatherCard__left" span={24}>
          {temperature}º C
        </Col>
        <Col span={12}>
          <p className="mainWeatherCard__right-min">{minTemp}º C</p>
          <p className="mainWeatherCard__right-max">{maxTemp}º C</p>
        </Col>
      </Row>
      <Row>
        <strong>ubicación actual:</strong>
      </Row>
      <Row>{city}</Row>
      <Row>{countryCode}</Row>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
      />
    </>
  );
};

export default MainWeatherCard;
