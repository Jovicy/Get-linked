import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const now: number = new Date().getTime();
    const targetTime: number = now + 24 * 60 * 60 * 1000;

    const timeDifference: number = targetTime - now;

    const hours: number = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes: number = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds: number = Math.floor((timeDifference / 1000) % 60);

    return (
      <div className="flex  gap-2">
        <div className="flex items-end">
          <p className="text-6xl font-normal font-unicaone">
            {String(hours).padStart(2, "0")}
          </p>
          <p className="text-sm font-normal font-unicaone">h</p>
        </div>
        <div className="flex items-end">
          <p className="text-6xl font-normal font-unicaone">
            {String(minutes).padStart(2, "0")}
          </p>
          <p className="text-sm font-normal font-unicaone">m</p>
        </div>
        <div className="flex items-end">
          <p className="text-6xl font-normal font-unicaone">
            {String(seconds).padStart(2, "0")}
          </p>
          <p className="text-sm font-normal font-unicaone">s</p>
        </div>
      </div>
    );
  };

  const [countdown, setCountdown] = useState<JSX.Element>(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{countdown}</div>;
};

export default CountdownTimer;
