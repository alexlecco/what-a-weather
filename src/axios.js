import axios from "axios";

const instanceArcgis = axios.create({
  baseURL:
    "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
});

const instanceOpenWeatherMap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export { instanceArcgis, instanceOpenWeatherMap };
