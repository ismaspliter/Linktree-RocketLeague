import React from 'react';

const Ball = ({ x, y }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Pelota con efecto neón */}
      <circle r="8" fill="white" stroke="#94a3b8" strokeWidth="2" filter="url(#ballGlow)" />
      <path d="M-4,-4 L4,4 M-4,4 L4,-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
};

export default Ball;
