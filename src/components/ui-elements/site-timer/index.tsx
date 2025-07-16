import { useEffect, useState } from "react";

export const SiteTimer = () => {
  const [timeOnSite, setTimeOnSite] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnSite((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div> {timeOnSite} soat </div>;
};
