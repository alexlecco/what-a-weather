import React, { useState, useEffect, useCallback } from "react";
import { Spin } from "antd";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";
import SelectCityModal from "./components/SelectCityModal/SelectCityModal";
import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useForecastInfo from "./hooks/useForecastInfo";
import { listOfCities } from "./constants";
import "antd/dist/antd.css";
import "./App.scss";

const App = () => {
  const [citiesList, setCitiesList] = useState(listOfCities);
  const [selectedCity, setSelectedCity] = useState({});
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { forecastInfo, todayInfo, loading } = useForecastInfo(
    selectedCity.lat,
    selectedCity.lon
  );
  const isCurrentLocation =
    locationData && locationData.city === selectedCity.city;

  useEffect(() => {
    if (
      locationData !== null &&
      locationData.city &&
      citiesList[0].city !== locationData.city
    ) {
      setCitiesList([locationData, ...citiesList]);
      setSelectedCity(locationData);
    }
  }, [locationData, setCitiesList, citiesList]);

  const onSelectCity = useCallback((option) => {
    setSelectedCity(option);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            <MainWeatherCard
              isCurrentLocation={isCurrentLocation}
              cityInfo={{ ...todayInfo, ...selectedCity }}
            />
            <ForecastContainer forecastInfo={forecastInfo} />
            <SelectCityModal
              onSelectCity={onSelectCity}
              citiesList={citiesList}
            />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
