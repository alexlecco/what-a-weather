import React from "react";
import { Spin } from "antd";
import "antd/dist/antd.css";

import "./App.scss";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";
import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useTemperatureInfo from "./hooks/useTemperatureInfo";

const App = () => {
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { temperatureInfo, loading } = useTemperatureInfo(
    locationData.lat,
    locationData.lon
  );

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <Spin size="large" />
        ) : (
          <MainWeatherCard
            city={locationData.city}
            countryCode={locationData.country}
            temperature={temperatureInfo.temperature}
            minTemp={temperatureInfo.minTemp}
            maxTemp={temperatureInfo.maxTemp}
            icon={temperatureInfo.icon}
          />
        )}
      </header>
    </div>
  );
};

export default App;
