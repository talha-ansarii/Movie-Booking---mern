import React from 'react'
import googlePlay from '../assets/Google Play.png'
import appStore from '../assets/image 6.png'
const Footer = () => {
  return (
    <footer className="bg-white text-black p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            Kanishk
          </div>
          <div>
            <h2 className="font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>About</li>
              <li>Partner</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Around</h2>
            <ul className="space-y-2">
              <li>News</li>
              <li>Cinemas</li>
              <li>My Ticket</li>
              <li>Payment</li>
              <li>Installments</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Update Covid-19</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Follow Social Media</h2>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-2xl"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-2xl"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-2xl"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <h2 className="font-bold mb-4">Download App</h2>
            <div className="flex space-x-1">
              <a href="#" className="bg-white text-white px-1 py-1 rounded"><img src={googlePlay} alt="Google Play" /></a>
              <a href="#" className="bg-white text-white px-1 py-1 rounded"><img src={appStore} alt="App Store" /></a>
            </div>
          </div>
        </div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p>&copy; 2024 TIX ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer