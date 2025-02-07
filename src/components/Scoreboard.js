import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div className="absolute top-56 left-1/2 transform -translate-x-1/2 bg-gray-800 px-12 py-4 rounded-lg border border-gray-600 text-white text-2xl font-extrabold shadow-lg flex items-center justify-center gap-6">
      <span className="text-blue-400 text-5xl">{score.blue}</span>
      <span className="text-white text-3xl">|</span>
      <span className="text-orange-400 text-5xl">{score.orange}</span>
    </div>
  );
};

export default Scoreboard;
