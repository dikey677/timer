import React, { useState, useEffect } from "react";

const Timer = () => {
  const [initialValue, setInitialValue] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Seconds"
          value={initialValue}
          onChange={(e) => setInitialValue(e.currentTarget.value)}
        />
        <button type="Submit">Start</button>
      </form>

      <span>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    </div>
  );
};

export default Timer;
