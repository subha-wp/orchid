'use client';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function Facilities() {
  const [facilities, setFacilities] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.facilities) {
          setFacilities(data.facilities);
        }
      })
      .catch(err => console.error('Failed to load facilities content:', err));
  }, []);
  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-gold-50 via-white to-orchid-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Our Facilities
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Everything you need for a perfect event, all under one roof
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orchid-100"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-orchid-600 to-orchid-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-inter pt-1">
                  {facility}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orchid-600 to-orchid-700 p-8 rounded-2xl shadow-xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Premium Facilities for Your Perfect Day
            </h3>
            <p className="text-lg font-inter text-orchid-100">
              Every detail thoughtfully designed to make your event extraordinary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
