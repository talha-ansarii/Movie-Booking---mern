// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import BookingPage from './pages/BookingPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Movie Details Page Route */}
          <Route path="/movie/:id" element={<MovieDetailsPage />} />

          {/* Booking Page Route */}
          <Route path="/booking/:id" element={<BookingPage />} />

          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Admin Page Route */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
