import { Building2, Palette, Users, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Building2,
    title: 'Spacious indoor & outdoor setup',
    description: 'Ample space for large gatherings with flexible arrangements'
  },
  {
    icon: Palette,
    title: 'Fully customizable decoration',
    description: 'Tailor every detail to match your unique vision and theme'
  },
  {
    icon: Users,
    title: 'Professional event support team',
    description: 'Dedicated experts ensuring seamless event execution'
  },
  {
    icon: MapPin,
    title: 'Prime location in Dakshin Barasat',
    description: 'Easily accessible with excellent connectivity'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-orchid-600 to-orchid-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orchid-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-orchid-100 font-inter">
            Your celebration, our responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className="bg-gradient-to-br from-gold-400 to-gold-500 text-orchid-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-orchid-100 font-inter leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
