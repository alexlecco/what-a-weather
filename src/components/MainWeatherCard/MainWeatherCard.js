import React from "react";
import { Row, Col } from "antd";
import { DaySunny } from "@intern0t/react-weather-icons";

import "./MainWeatherCard.scss";

const MainWeatherCard = () => {
  const currentTemp = 25;
  const maxTemp = 27;
  const minTemp = 17;

  return (
    <>
      <Row className="mainWeatherCard">
        <Col className="mainWeatherCard__left" span={24}>
          {currentTemp}º C
        </Col>
        <Col span={12}>
          <p className="mainWeatherCard__right-min">{minTemp}º C</p>
          <p className="mainWeatherCard__right-max">{maxTemp}º C</p>
        </Col>
      </Row>
      <Row>
        <strong>ubicación actual:</strong>
      </Row>
      <Row>San Miguel de Tucumán</Row>
      <Row>Argentina</Row>
      <DaySunny color="#fff" size={100} />
    </>
  );
};

export default MainWeatherCard;
