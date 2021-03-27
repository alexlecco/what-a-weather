import { useState, useEffect } from "react";
import { instanceOpenWeatherMap } from "../axios";

const useForecastInfo = (lat, lon) => {
  const [loading, setLoading] = useState(true);
  const [forecastInfo, setForecastInfo] = useState([]);
  const [todayInfo, setTodayInfo] = useState({});

  const OPENWEATHERMAP_APIKEY = "802b50500b2e8e9b6499ebd055e046c1";

  useEffect(() => {
    const fetchForecastInfo = async () => {
      setLoading(true);
      try {
        const response = await instanceOpenWeatherMap.get(
          `/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&exclude=minutely,hourly,alerts&appid=${OPENWEATHERMAP_APIKEY}`
        );
        const days = response.data.daily;
        const { current } = response.data;
        let daysInfo = [];

        days.forEach((day) => {
          if (daysInfo.length < 6) {
            daysInfo.push({
              dayNum: new Date(day.dt * 1000).getDay(),
              minTemp: Math.round(day.temp.min),
              maxTemp: Math.round(day.temp.max),
              icon: day.weather[0].icon,
            });
          }
        });
        setTodayInfo({
          temp: Math.round(current.temp),
          minTemp: Math.round(daysInfo[0].minTemp),
          maxTemp: Math.round(daysInfo[0].maxTemp),
          icon: daysInfo[0].icon,
        });

        daysInfo.shift();
        setForecastInfo(daysInfo);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (lat && lon) fetchForecastInfo();
  }, [lat, lon]);

  return { forecastInfo, todayInfo, loading };
};

export default useForecastInfo;
