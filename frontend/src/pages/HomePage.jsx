import React from 'react';
import MovieCarousel from '../components/MovieCarousel';
import ComingSoon from '../components/ComingSoon';
import Advertisement from '../components/Advertisement';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">TIX ID</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <MovieCarousel />
          
          <div className="mt-12">
            <Advertisement />
          </div>
          <div className="mt-12">
            <ComingSoon />
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default HomePage;