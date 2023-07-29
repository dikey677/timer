import React, { useState, useEffect } from "react";

const Timer = () => {
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [over, setOver] = React.useState(false);

  useEffect(() => {
    const timerID = setInterval(() => runTimer(), 1000);
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    //Calc hours
    setHours(Math.floor(initialSeconds / 3600));

    //Calc mins
    setMinutes(Math.floor(initialSeconds / 60) - hours * 60);

    //Calc secs
    setSeconds(initialSeconds % 60);
    console.log("Total hours", hours, "minutes", minutes, "seconds", seconds);
  });

  const runTimer = () => {
    // if (over) return;

    setSeconds((prev) => prev - 1);

    if (hours === 0 && minutes === 0 && seconds === 0) {
      setOver(true);
    } else if (minutes === 0 && seconds === 0) {
      setHours((prev) => prev - 1);
      setMinutes(59);
      setSeconds(59);
    } else if (seconds === 0) {
      setMinutes((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Seconds"
          value={initialSeconds}
          onChange={(e) => setInitialSeconds(e.target.value)}
        />

        <button type="button">Start</button>
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
