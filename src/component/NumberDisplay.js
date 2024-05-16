import React, { useState } from 'react';
import '../styles/style.css';

function NumberDisplay() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 2);
  };

  const decreaseNumber = () => {
    setNumber(number - 3);
  };

  return (
    <div>
      <h2>Number Display</h2>
      <p>Number: {number}</p>
      <button onClick={increaseNumber}>Increase by 2</button>
      <button onClick={decreaseNumber}>Decrease by 3</button>
    </div>
  );
}

export default NumberDisplay;
