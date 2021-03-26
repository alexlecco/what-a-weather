import axios from "axios";

const instanceIpAPI = axios.create({
  baseURL: "http://ip-api.com/json",
});

const instanceOpenWeatherMap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export { instanceIpAPI, instanceOpenWeatherMap };
