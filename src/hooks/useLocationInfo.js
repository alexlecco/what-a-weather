import { useState, useEffect } from "react";
import { instanceIpAPI } from "../axios";

const useLocationInfo = (publicIp) => {
  const [loading, setLoading] = useState(true);
  const [locationData, setLocationData] = useState(null);

  const fetchIpInfo = async () => {
    await instanceIpAPI
      .get(`/${publicIp}`)
      .then((response) => {
        const { data } = response;

        setLocationData({
          city: data.city,
          country: data.country,
          lat: data.lat,
          lon: data.lon,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  useEffect(() => {
    fetchIpInfo();
  }, [publicIp]);

  return { loading, locationData };
};

export default useLocationInfo;
