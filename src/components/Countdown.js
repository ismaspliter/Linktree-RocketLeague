import React, { useState, useEffect } from 'react';

const Countdown = ({ onCountdownComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev === 1) {
          clearInterval(timer);
          onCountdownComplete();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <text x="200" y="165" textAnchor="middle" fontSize="40" fill="white" fontWeight="bold">
      {count}
    </text>
  );
};

export default Countdown;
