'use client';
import { Heart, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-orchid-400">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C10.9 2 10 2.9 10 4C10 4.7 10.4 5.4 11 5.7V7C11 7.6 11.4 8 12 8C12.6 8 13 7.6 13 7V5.7C13.6 5.4 14 4.7 14 4C14 2.9 13.1 2 12 2M12 9C9.2 9 7 11.2 7 14C7 15.9 8.2 17.5 9.8 18.3L9 22H11L11.5 19H12.5L13 22H15L14.2 18.3C15.8 17.5 17 15.9 17 14C17 11.2 14.8 9 12 9M12 11C13.7 11 15 12.3 15 14C15 15.7 13.7 17 12 17C10.3 17 9 15.7 9 14C9 12.3 10.3 11 12 11Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">
                  Orchid Garden & Banquet
                </h3>
                <p className="text-sm text-gold-400">Premium Event Venue</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter leading-relaxed">
              Creating unforgettable memories for every celebration in Dakshin Barasat.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-4 text-orchid-300">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('facilities')}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-4 text-orchid-300">Our Services</h4>
            <ul className="space-y-2 font-inter text-gray-400">
              <li>Weddings</li>
              <li>Receptions</li>
              <li>Anniversary Celebrations</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Family Gatherings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-4 text-orchid-300">Contact Info</h4>
            <div className="space-y-4 font-inter">
              <a
                href="tel:+919679042015"
                className="flex items-start space-x-3 text-gray-400 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>+91 96790 42015</span>
              </a>
              <a
                href="tel:+917001937559"
                className="flex items-start space-x-3 text-gray-400 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>+91 70019 37559</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Dakshin Barasat, West Bengal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-inter text-sm text-center md:text-left">
              &copy; 2025 Orchid Garden & Banquet. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 font-inter text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for memorable celebrations
              </p>
              <a
                href="/admin/login"
                className="text-gray-500 hover:text-gray-400 font-inter text-xs transition-colors"
              >
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
