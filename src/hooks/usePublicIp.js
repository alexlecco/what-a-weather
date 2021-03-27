import { useState, useEffect } from "react";

const usePublicIp = () => {
  const publicIp = require("public-ip");
  const [publicIpV4, setPublicIpV4] = useState();

  useEffect(() => {
    (async () => {
      const result = await publicIp.v4();
      setPublicIpV4(result);
    })();
  }, [publicIp]);

  return { publicIpV4 };
};

export default usePublicIp;
