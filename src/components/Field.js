import React from 'react';

const Field = ({ children }) => {
  return (
    <div className="w-full max-w-5xl h-110 relative">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          {/* Patrón de césped */}
          <pattern id="grassPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0,5 L5,0 M5,10 L10,5" stroke="#166534" strokeWidth="0.5" fill="none" opacity="0.2" />
          </pattern>

          {/* Efectos de neón */}
          <filter id="neonBlue">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="neonOrange">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* 🔥 Filtro para el efecto NEÓN en la línea central */}
          <filter id="neonWhite">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        

          {/* Gradiente del césped */}
          <radialGradient id="fieldGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#14532d" />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>
        

            {/* Clip para recortar la imagen en un círculo */}
            <clipPath id="centerCircleClip">
            <circle cx="200" cy="150" r="40" />
            </clipPath>
        </defs>

        {/* Campo con patrón de césped */}
        <path
          d="M40,10 L360,10 L390,40 L390,260 L360,290 L40,290 L10,260 L10,40 Z"
          fill="url(#fieldGradient)"
        />
        <path
          d="M45,15 L355,15 L385,45 L385,255 L355,285 L45,285 L15,255 L15,45 Z"
          fill="url(#grassPattern)"
        />
        {/* TEXTO SPLITER INTEGRADO EN EL CÉSPED */}
        <text
          x="40"
          y="90"
          fontSize="80"
          fontWeight="bold"
          fill="rgba(20, 83, 45, 0.1)" 
          fontFamily="Arial"
        >
          SPLITER
        </text>
        <text
          x="50"
          y="180"
          fontSize="80"
          fontWeight="bold"
          fill="rgba(20, 83, 45, 0.1)" 
          fontFamily="Arial"
        >
          MELON
        </text>
        <text
          x="40"
          y="270"
          fontSize="80"
          fontWeight="bold"
          fill="rgba(20, 83, 45, 0.1)" 
          fontFamily="Arial"
        >
          SPLITER
        </text>

        {/* Líneas del campo con efecto neón */}
        <g filter="url(#neonBlue)">
          <path
            d="M15,45 L45,15 L200,15 L200,285 L45,285 L15,255 Z"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            opacity="0.5"
          />
        </g>

        

        <g filter="url(#neonOrange)">
          <path
            d="M200,15 L355,15 L385,45 L385,255 L355,285 L200,285 Z"
            fill="none"
            stroke="#f97316"
            strokeWidth="1"
            opacity="0.5"
          />
        </g>

        {/* Línea central y círculo */}
        
        <circle cx="200" cy="150" r="40" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0,5" />

        {/* Porterías */}
        <rect x="0" y="110" width="15" height="80" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <rect x="385" y="110" width="15" height="80" fill="#1e293b" stroke="#f97316" strokeWidth="2" />

        {/* Áreas de gol */}
        <path d="M15,80 Q60,80 60,150 Q60,220 15,220" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
        <path d="M385,80 Q340,80 340,150 Q340,220 385,220" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.7" />

        <line x1="200" y1="15" x2="200" y2="285" stroke="#FFFFFF" strokeWidth="1" opacity="0,5" />

           {/* Imagen dentro del círculo central */}
           <image 
          x="160" 
          y="110" 
          width="80" 
          height="80" 
          href="/profile.jpg" 
          clipPath="url(#centerCircleClip)"
        />
        
        {children}
        
      </svg>
    </div>
  );
};

export default Field;
