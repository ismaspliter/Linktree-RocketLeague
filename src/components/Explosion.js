import React, { useEffect, useState } from 'react';

const Explosion = ({ x, y, team, socialIcons, onAbsorbComplete }) => {
  const [absorbing, setAbsorbing] = useState(true);
  const [iconPositions, setIconPositions] = useState(socialIcons);

  useEffect(() => {
    const moveIcons = setInterval(() => {
      setIconPositions(prevPositions =>
        prevPositions.map(icon => ({
          ...icon,
          x: icon.x + (x - icon.x) * 0.1, // Se mueve hacia el agujero negro
          y: icon.y + (y - icon.y) * 0.1
        }))
      );
    }, 50);

    setTimeout(() => {
      clearInterval(moveIcons);
      setAbsorbing(false);
      setTimeout(() => {
        onAbsorbComplete();
      }, 2000);
    }, 4000);

    return () => clearInterval(moveIcons);
  }, []);

  return (
    <g>
      {absorbing && (
        <circle r="0" fill="black" opacity="0.9" transform={`translate(${x}, ${y})`}>
          <animate attributeName="r" from="0" to="100" dur="4s" />
          <animate attributeName="opacity" from="0.9" to="0" dur="4s" />
        </circle>
      )}

      {absorbing &&
        iconPositions.map((icon, index) => (
          <g key={index} transform={`translate(${icon.x},${icon.y})`}>
            <circle r="18" fill={icon.color} opacity="0.8">
              <animate attributeName="opacity" from="0.8" to="0" dur="4s" />
            </circle>
          </g>
        ))}
    </g>
  );
};

export default Explosion;
