'use client';
import { Heart, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

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
               <Image src="/orchid.jpeg" alt="Orchid Garden & Banquet" width={90} height={70} />
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
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> 
              </p>
              <a
                href="https://www.codvix.in/"
                className="text-gray-500 hover:text-gray-400 font-inter text-xs transition-colors"
              >
                codvix
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
