import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import "./ForecastContainer.scss";
import ForecastDay from "../ForecastDay/ForecastDay";

const ForecastContainer = ({ minTemp, maxTemp, icon }) => {
  const days = ["vie", "sab", "dom", "lun", "mar"];

  return (
    <div className="forecastContainer">
      <Row>
        {days.map((day) => (
          <Col flex={1} xs={24}>
            <ForecastDay
              minTemp={minTemp}
              maxTemp={maxTemp}
              icon={icon}
              day={day}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForecastContainer;
