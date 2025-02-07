import React, { useState } from 'react';

const SocialIcon = ({ Icon, x, y, color, team, name, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <g 
        transform={`translate(${x},${y})`} 
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Círculo con efecto neón */}
        <circle
          r="18"
          fill={`url(#${team}Team)`}
          fillOpacity={hovered ? "0.4" : "0.2"}
          stroke={color}
          strokeWidth={hovered ? "3" : "2"}
          filter={hovered ? "url(#buttonGlow)" : "none"}
        />

        {/* Icono dentro del círculo */}
        <foreignObject x="-15" y="-15" width="30" height="30">
          <div className="w-full h-full flex items-center justify-center">
            <Icon size={26} color={hovered ? "#fff" : color} />
          </div>
        </foreignObject>

        {/* Etiqueta emergente con el nombre de la red social */}
        {hovered && (
          <g transform="translate(0, -35)">
            <rect
              x="-40"
              y="-15"
              width="80"
              height="25"
              rx="4"
              fill={color}
              filter={`url(#${team === "blue" ? "neonBlue" : "neonOrange"})`}
            />
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontFamily="Arial"
              alignmentBaseline="middle"
            >
              {name}
            </text>
          </g>
        )}
      </g>
    </a>
  );
};

export default SocialIcon;
