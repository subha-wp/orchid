'use client';
import { useState, useEffect } from 'react';
import { Heart, Users, Cake, Briefcase, Home, Gift, LucideIcon } from 'lucide-react';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Users,
  Cake,
  Briefcase,
  Home,
  Gift,
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.services) {
          setServices(data.services);
        }
      })
      .catch(err => console.error('Failed to load services content:', err));
  }, []);
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            All arrangements can be customized as per your theme and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-gradient-to-br from-orchid-600 to-orchid-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 font-inter">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
