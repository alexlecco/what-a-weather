import { useState, useEffect } from "react";
import { instanceOpenWeatherMap } from "../axios";

const useForecastInfo = (lat, lon) => {
  const [loading, setLoading] = useState(true);
  const [forecastInfo, setForecastInfo] = useState([]);
  const [todayInfo, setTodayInfo] = useState({});

  const fetchForecastInfo = async () => {
    await instanceOpenWeatherMap
      .get(
        `/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&exclude=minutely,hourly,alerts&appid=802b50500b2e8e9b6499ebd055e046c1`
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
        setTodayInfo({
          currTemp: current.temp,
          minTemp: daysInfo[0].minTemp,
          maxTemp: daysInfo[0].maxTemp,
          icon: daysInfo[0].icon,
        });
        daysInfo.shift();
        setForecastInfo(daysInfo);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  useEffect(() => {
    if (lat && lon) fetchForecastInfo();
  }, [lat, lon]);

  return { forecastInfo, todayInfo, loading };
};

export default useForecastInfo;
