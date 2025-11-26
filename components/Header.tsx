'use client';
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-orchid-600">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.9 2 10 2.9 10 4C10 4.7 10.4 5.4 11 5.7V7C11 7.6 11.4 8 12 8C12.6 8 13 7.6 13 7V5.7C13.6 5.4 14 4.7 14 4C14 2.9 13.1 2 12 2M12 9C9.2 9 7 11.2 7 14C7 15.9 8.2 17.5 9.8 18.3L9 22H11L11.5 19H12.5L13 22H15L14.2 18.3C15.8 17.5 17 15.9 17 14C17 11.2 14.8 9 12 9M12 11C13.7 11 15 12.3 15 14C15 15.7 13.7 17 12 17C10.3 17 9 15.7 9 14C9 12.3 10.3 11 12 11Z" />
              </svg>
            </div>
            <div>
              <Image src="/orchid.jpeg" alt="Orchid Garden & Banquet" width={100} height={100} />
              {/* <h1 className="text-xl md:text-2xl font-playfair font-bold text-gray-800 leading-tight">
                Orchid Garden & Banquet
              </h1>
              <p className="text-xs text-gold-600 font-inter">Premium Event Venue</p> */}
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orchid-600 font-inter font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+919679042015"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orchid-600 to-orchid-700 text-white px-5 py-2.5 rounded-full hover:from-orchid-700 hover:to-orchid-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-inter font-medium">Call Now</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orchid-50 hover:text-orchid-600 rounded-lg transition-colors duration-200 font-inter"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
