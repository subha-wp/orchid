import { MapPin, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-orchid-50 via-white to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            <MapPin className="inline-block w-10 h-10 mb-2 text-orchid-600" /> Location
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Orchid Garden & Banquet, Dakshin Barasat
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.249645403893!2d88.44781499999999!3d22.2306049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0241006aae4f7d%3A0x9a185c16b14e98c6!2sORCHID%20GARDEN%20%26%20BANQUET!5e0!3m2!1sen!2sin!4v1763563129137!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orchid Garden & Banquet Location"
                className="w-full"
              ></iframe>
            </div>

            <div className="p-8 text-center bg-gradient-to-br from-orchid-600 to-orchid-700 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Easy to Find, Convenient to Reach
              </h3>
              <p className="text-lg text-orchid-100 mb-6 font-inter">
                Located in the heart of Dakshin Barasat with excellent connectivity
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-orchid-700 px-8 py-3 rounded-full font-inter font-semibold hover:bg-gold-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
