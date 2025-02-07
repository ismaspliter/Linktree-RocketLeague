import React from 'react';

const SocialIcon = ({ x, y, color, name }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r="18" fill={color} opacity="0.8" />
      <text x="0" y="30" fill="white" fontSize="10" textAnchor="middle">{name}</text>
    </g>
  );
};

export default SocialIcon;
