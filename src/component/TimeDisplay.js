import React, { useState, useEffect } from 'react';
import '../styles/style.css';

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimeDisplay;
