import axios from "axios";

const instanceIpAPI = axios.create({
  baseURL: "http://ip-api.com/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const instanceOpenWeatherMap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export { instanceIpAPI, instanceOpenWeatherMap };
