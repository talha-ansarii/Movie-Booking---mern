import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieCarousel = () => {
  const movies = [
    { title: "Spider-Man: No Way Home", img: "../movie_posters/Spiderman_ No Way Home.png" },
    { title: "Yowis Ben Finale", img: "../movie_posters/Yowis Ben.png" },
    { title: "Ghostbusters Afterlife", img: "../movie_posters/Ghostbusters Afterlife.png" },
    { title: "House of Gucci", img: "../movie_posters/House of Gucci.png" },
    { title: "Tenet", img: "../movie_posters/Tenet.png" },
    { title: "John Wick Chapter 3", img: "../movie_posters/John Wick_ Chapter 3 - Parabellum.png" },
    { title: "Avengers: Endgame", img: "../movie_posters/Avengers_ Endgame.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 < movies.length ? prevIndex + 2 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 2 : movies.length - 2));
  };

  const formatColors = {
    XXI: "bg-gradient-to-r from-[#F2C46F] to-[#C6943F]",
    CGV: "bg-[#EC1E2B]",
    CINEPOLIS: "bg-[#000E62]"
  };

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 4000);

    return () => clearInterval(interval); }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
      <div className="flex items-center justify-between">
        <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <div className="flex space-x-20 overflow-hidden">
          {[0, 1].map((offset) => {
            const movie = movies[(currentIndex + offset) % movies.length];
            return (
              <div key={offset} className="flex flex-col items-center w-90">
                <img src={movie.img} alt={movie.title} className="w-full h-[550px] object-cover rounded-lg shadow-lg" />
                <h3 className="text-center text-lg font-bold mt-2">{movie.title}</h3>
                <div className="flex space-x-2 mt-2">
                  {Object.entries(formatColors).map(([format, color]) => (
                    <span key={format} className={`text-xs text-white px-2 py-1 rounded ${color}`}>
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={nextSlide} className="p-2 bg-gray-200 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieCarousel;