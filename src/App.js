import React from "react";
import { Spin } from "antd";
import "antd/dist/antd.css";

import "./App.scss";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";
import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useForecastInfo from "./hooks/useForecastInfo";

const App = () => {
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);

  const { forecastInfo, todayInfo, loading } = useForecastInfo(
    locationData.lat,
    locationData.lon
  );

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            <MainWeatherCard
              city={locationData.city}
              countryCode={locationData.country}
              temperature={todayInfo.currTemp}
              minTemp={todayInfo.minTemp}
              maxTemp={todayInfo.maxTemp}
              icon={todayInfo.icon}
            />
            <ForecastContainer forecastInfo={forecastInfo} />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
