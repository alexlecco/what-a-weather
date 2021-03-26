import { useState, useEffect } from "react";
import { instanceOpenWeatherMap } from "../axios";

const useSelectedCityForecastInfo = (selectedCityName) => {
  const [loading, setLoading] = useState(true);
  const [selectedCityForecastInfo, setSelectedCityForecastInfo] = useState([]);
  const [selectedTodayForecastInfo, setSelectedTodayForecastInfo] = useState(
    null
  );

  const { REACT_APP_OPENWEATHERMAP_APIKEY } = process.env;

  const fetchSelectedCityForecastInfo = async () => {
    const cities = require("cities.json");
    const city = cities.filter((city) => city.name === selectedCityName.name);
    const lat = city[0].lat;
    const lon = city[0].lng;

    await instanceOpenWeatherMap
      .get(
        `/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&exclude=minutely,hourly,alerts&appid=${REACT_APP_OPENWEATHERMAP_APIKEY}`
      )
      .then((response) => {
        const days = response.data.daily;
        const { current } = response.data;
        let daysInfo = [];

        days.forEach((day) => {
          if (daysInfo.length < 6) {
            daysInfo.push({
              dayNum: new Date(day.dt * 1000).getDay(),
              minTemp: day.temp.min,
              maxTemp: day.temp.max,
              icon: day.weather[0].icon,
            });
          }
        });
        setSelectedTodayForecastInfo({
          temp: current.temp,
          minTemp: daysInfo[0].minTemp,
          maxTemp: daysInfo[0].maxTemp,
          icon: daysInfo[0].icon,
        });
        daysInfo.shift();
        setSelectedCityForecastInfo(daysInfo);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  useEffect(() => {
    fetchSelectedCityForecastInfo();
  }, [selectedCityName]);

  return { selectedCityForecastInfo, selectedTodayForecastInfo, loading };
};

export default useSelectedCityForecastInfo;
