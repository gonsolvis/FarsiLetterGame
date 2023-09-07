import React, { useState, useEffect } from "react";

function Countdown({ countdown }) {
  // Initial countdown value in seconds

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCountdown((prevCountdown) => prevCountdown - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const formatTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="countdown">
      <h5>{formatTime(countdown)}</h5>
    </div>
  );
}

export default Countdown;
