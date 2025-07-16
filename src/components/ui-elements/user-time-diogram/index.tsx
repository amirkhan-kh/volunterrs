import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UsageTimer: React.FC = () => {
  const [secondsUsed, setSecondsUsed] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("usageSeconds");
    if (stored) {
      setSecondsUsed(parseInt(stored));
    }

    const interval = setInterval(() => {
      setSecondsUsed((prev) => {
        const updated = prev + 1;
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hoursUsed = Math.floor(secondsUsed / 3600);
  const percent = Math.min((hoursUsed / 168) * 100, 100); // 168 soat = 1 hafta

  return (
    <div className="w-30 h-40">
      <CircularProgressbar
        value={percent}
        text={`${hoursUsed} soat`}
        strokeWidth={10}
        styles={buildStyles({  pathColor: "#4c8bf5", textColor: "#4c8bf5", trailColor: "#e6ecfc", textSize: "16px"})}/>
    </div>
  );
};

export default UsageTimer;