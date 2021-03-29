const mock_citiesInfo = [
  {
    city: "San Miguel de Tucumán",
    country: "ARG",
    lat: -26.8238848,
    lon: -65.2378112,
  },
  { city: "Nairobi", country: "Kenia", lat: -1.292066, lon: 36.821945 },
  { city: "Helsinki", country: "Finlandia", lat: 60.169857, lon: 24.938379 },
  { city: "Tokyo", country: "Japón", lat: 35.689487, lon: 139.691711 },
  {
    city: "Denver",
    country: "Estados Unidos",
    lat: 39.739235,
    lon: -104.99025,
  },
  { city: "Berlín", country: "Alemania", lat: 52.520008, lon: 13.404954 },
];

const mock_cityInfo = {
  city: "San Miguel de Tucumán",
  country: "ARG",
  icon: "01d",
  lat: -26.8238848,
  lon: -65.2378112,
  maxTemp: 26,
  minTemp: 13,
  temp: 24,
};

const mock_forecastInfo = [
  {
    dayNum: 1,
    minTemp: 14,
    maxTemp: 27,
    icon: "01d",
  },
  {
    dayNum: 2,
    minTemp: 15,
    maxTemp: 26,
    icon: "01d",
  },
  {
    dayNum: 3,
    minTemp: 18,
    maxTemp: 26,
    icon: "04d",
  },
  {
    dayNum: 4,
    minTemp: 20,
    maxTemp: 25,
    icon: "10d",
  },
  {
    dayNum: 5,
    minTemp: 19,
    maxTemp: 24,
    icon: "10d",
  },
];

export { mock_citiesInfo, mock_cityInfo, mock_forecastInfo };
