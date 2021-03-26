import React from "react";

import "./App.scss";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";
import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useTemperatureInfo from "./hooks/useTemperatureInfo";

const App = () => {
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { temperatureInfo } = useTemperatureInfo(
    locationData.lat,
    locationData.lon
  );

  return (
    <div className="App">
      <header className="App-header">
        <MainWeatherCard
          city={locationData.city}
          countryCode={locationData.country}
          temperature={temperatureInfo.temperature}
          minTemp={temperatureInfo.minTemp}
          maxTemp={temperatureInfo.maxTemp}
          icon={temperatureInfo.icon}
        />
      </header>
    </div>
  );
};

export default App;
