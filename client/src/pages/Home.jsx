import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx'

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-indigo-600 to-purple-500 text-white py-20 px-4">
        <div className='flex justify-center items-center mt-30'>
          <Navbar />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Chatter 💬
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connect instantly. Chat freely. Chatter makes communication seamless.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Middle Content Section */}
      <section className="flex-1 py-16 px-4 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Chatter?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">💬 Real-Time Messaging</h3>
              <p>Send and receive messages instantly with no delay.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔒 Secure & Private</h3>
              <p>End-to-end encryption to protect your conversations.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🌐 Multi-Platform</h3>
              <p>Use Chatter on web, mobile, and desktop seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Chatter</h3>
            <p className="text-sm">
              Chatter is your go-to platform for seamless and secure communication. Stay connected anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chatter. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

