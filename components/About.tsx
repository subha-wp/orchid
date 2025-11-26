import { Sparkles, Award, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Elegant Design',
    description: 'Beautifully crafted spaces with attention to every detail'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Top-tier facilities and world-class service standards'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your event'
  },
  {
    icon: Heart,
    title: 'Memorable Moments',
    description: 'Creating lasting memories for you and your guests'
  }
];

const aboutImages = [
  {
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Banquet hall interior'
  },
  {
    url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Event decorations'
  },
  {
    url: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Stage setup'
  },
  {
    url: 'https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Outdoor garden area'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl shadow-xl ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed">
              Orchid Garden & Banquet offers a modern, spacious and beautifully crafted event space
              where comfort and elegance come together.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed">
              Our experienced event team ensures every detail — decoration, lighting, catering, and
              guest arrangements — is handled smoothly, allowing you to enjoy a hassle-free celebration.
            </p>
            <div className="pt-4">
              <div className="inline-block bg-gradient-to-r from-orchid-600 to-gold-500 text-white px-8 py-3 rounded-full font-inter font-semibold shadow-lg">
                Your celebration, our responsibility.
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orchid-50 to-gold-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-orchid-600 to-orchid-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
