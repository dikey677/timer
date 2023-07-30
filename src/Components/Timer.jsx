import React, { useState, useEffect } from "react";

const Timer = () => {
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTime = () => {
    //Calc hours
    setHours(Math.floor(initialSeconds / 3600));

    //Calc mins
    setMinutes(Math.floor((initialSeconds / 60) % 60));

    //Calc secs
    setSeconds(initialSeconds % 60);
  };

  const runTimer = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      return;
    } else if (minutes === 0 && hours > 0) {
      setHours((prev) => prev - 1);
      setMinutes(59);
    } else if (seconds === 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    } else {
      setSeconds((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log(`Total hours ${hours} minutes ${minutes} seconds ${seconds}`);
    const timerID = setInterval(() => runTimer(), 1);

    return () => clearInterval(timerID);
  });

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Seconds"
          value={initialSeconds}
          onChange={(e) => setInitialSeconds(e.target.value)}
        />

        <button type="button" onClick={calculateTime}>
          Start
        </button>
      </div>

      <span>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    </div>
  );
};

export default Timer;
