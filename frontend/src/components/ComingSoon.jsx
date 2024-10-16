import React from 'react';

const ComingSoon = () => {
  const comingSoonMovies = [
    {
      title: "The Matrix: Resurrections",
      img: "../movie_posters/The_Matrix_Resurrections.png",
      formats: ["XD", "CGV", "CINEPLUS"]
    },
    {
      title: "Resident Evil: Welcome to Raccoon City",
      img: "../movie_posters/Resident Evil_ Welcome to Raccoon City.png",
      formats: ["XD", "CGV", "CINEPLUS"]
    },
    {
      title: "Sword Art Online Progressive",
      img: "../movie_posters/Sword Art Online_ Progressive - Aria of a Starless Night.png",
      formats: ["XD", "CGV", "CINEPLUS"]
    },
  ];

  const formatColors = {
    XD: "bg-[#EC1E2B]",
    CGV: "bg-gradient-to-r from-[#F2C46F] to-[#C6943F]",
    CINEPLUS: "bg-[#000E62]"
  };

  return (
    <div className="mt-10 p-4">
      <h2 className="text-2xl font-bold">Coming Soon</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {comingSoonMovies.map((movie, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-80 h-[450px] overflow-hidden">
              <img 
                src={movie.img} 
                alt={movie.title} 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-center text-lg font-bold mt-2">{movie.title}</h3>
            <div className="flex space-x-2 mt-2">
              {movie.formats.map((format, idx) => (
                <span 
                  key={idx} 
                  className={`text-xs text-white px-2 py-1 rounded ${formatColors[format]}`}
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;