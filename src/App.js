import React, { useState, useEffect, useCallback } from "react";
import { Spin } from "antd";
import "antd/dist/antd.css";

import "./App.scss";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";
import SelectCityModal from "./components/SelectCityModal/SelectCityModal";
import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useForecastInfo from "./hooks/useForecastInfo";
import useSelectedCityForecastInfo from "./hooks/useSelectedCityForecastInfo";

const App = () => {
  const [isCurrentLocation, setIsCurrentLocation] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { forecastInfo, todayInfo, loading } = useForecastInfo(
    locationData.lat,
    locationData.lon
  );

  const [selectedCityName, setSelectedCityName] = useState({
    name: "Berlin",
    country: "DE",
  });
  const {
    selectedCityForecastInfo,
    selectedTodayForecastInfo,
  } = useSelectedCityForecastInfo(selectedCityName);

  const onSetSelectedCityName = useCallback((option) => {
    setSelectedCityName(option);
    setIsCurrentLocation(false);
  }, []);

  useEffect(() => {
    setSelectedCity({
      city: selectedCityName.name,
      country: selectedCityName.country,
      temp: selectedTodayForecastInfo && selectedTodayForecastInfo.temp,
      minTemp: selectedTodayForecastInfo && selectedTodayForecastInfo.minTemp,
      maxTemp: selectedTodayForecastInfo && selectedTodayForecastInfo.maxTemp,
      icon: selectedTodayForecastInfo && selectedTodayForecastInfo.icon,
      forecastInfo: [...selectedCityForecastInfo],
    });
  }, [selectedCityForecastInfo, selectedTodayForecastInfo]);

  useEffect(() => {
    setSelectedCity({
      city: locationData.city,
      country: locationData.country,
      temp: todayInfo.temp,
      minTemp: todayInfo.minTemp,
      maxTemp: todayInfo.maxTemp,
      icon: todayInfo.icon,
      forecastInfo: [...forecastInfo],
    });
  }, [locationData, forecastInfo]);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            <MainWeatherCard cityInfo={selectedCity} />
            <ForecastContainer cityInfo={selectedCity} />
            <SelectCityModal selectCity={onSetSelectedCityName} />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
