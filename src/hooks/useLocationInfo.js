import { useState, useEffect } from "react";
import { instanceArcgis } from "../axios";

const useLocationInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchLocationInfo = async () => {
      setLoading(true);
      if (!navigator.geolocation) {
        setLoading(false);
        setError("Navegador no soportado");
      } else {
        navigator.geolocation.getCurrentPosition(async (location) => {
          const { longitude, latitude } = location.coords;

          const reverseGeocode = await instanceArcgis.get(
            `/reverseGeocode?f=pjson&location=${longitude},${latitude}`
          );

          setLocationData({
            city: reverseGeocode.data.address.City,
            country: reverseGeocode.data.address.CountryCode,
            lat: latitude,
            lon: longitude,
          });
          setLoading(false);
        }, error);
      }
    };

    fetchLocationInfo();
  }, [error]);

  return { loading, locationData };
};

export default useLocationInfo;
