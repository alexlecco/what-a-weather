import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import "./ForecastContainer.scss";
import { dayNames } from "../../constants";
import ForecastDay from "../ForecastDay/ForecastDay";

const ForecastContainer = ({ forecastInfo }) => {
  return (
    <div className="forecastContainer">
      <Row data-testid="forecast_container">
        {forecastInfo.map((day) => (
          <Col
            flex={1}
            xs={24}
            key={day.dayNum}
            className="forecasDayContainer"
          >
            <ForecastDay
              minTemp={day.minTemp}
              maxTemp={day.maxTemp}
              icon={day.icon}
              day={dayNames[day.dayNum]}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForecastContainer;
