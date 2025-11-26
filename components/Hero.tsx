'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar } from 'lucide-react';

interface HeroImage {
  url: string;
  alt: string;
}

interface HeroData {
  images: HeroImage[];
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroData, setHeroData] = useState<HeroData>({
    images: [],
    title: 'Welcome to',
    subtitle: 'Orchid Garden & Banquet',
    description: 'A Premium Event Venue in Dakshin Barasat',
    tagline: 'Where every celebration becomes memorable.'
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.hero) {
          setHeroData(data.hero);
        }
      })
      .catch(err => console.error('Failed to load hero content:', err));
  }, []);

  useEffect(() => {
    if (heroData.images.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroData.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroData.images.length]);

  const nextSlide = () => {
    if (heroData.images.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % heroData.images.length);
    }
  };

  const prevSlide = () => {
    if (heroData.images.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + heroData.images.length) % heroData.images.length);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (heroData.images.length === 0) {
    return null;
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroData.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <div className="mb-6 inline-block">
            <div className="w-16 h-1 bg-gold-400 mx-auto mb-6"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 animate-fade-in">
            {heroData.title}
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-orchid-200 animate-fade-in">
            {heroData.subtitle}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-inter mb-4 text-gold-200">
            {heroData.description}
          </p>
          <p className="text-base md:text-lg lg:text-xl font-inter mb-10 text-gray-200 max-w-2xl mx-auto">
            {heroData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="flex items-center space-x-2 bg-gradient-to-r from-orchid-600 to-orchid-700 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-orchid-700 hover:to-orchid-800 transition-all duration-300 shadow-2xl hover:shadow-orchid-500/50 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>
            <a
              href="tel:+919679042015"
              className="flex items-center space-x-2 bg-white text-orchid-700 px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-gold-50 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroData.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold-400 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
