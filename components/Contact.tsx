'use client';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  // WhatsApp phone numbers (without + and spaces)
  const whatsappNumber1 = '919679042015';
  const whatsappNumber2 = '917001937559';
  
  // Pre-filled message for WhatsApp
  const whatsappMessage = encodeURIComponent('Hello! I would like to make a booking enquiry.');

  const openWhatsApp = (phoneNumber: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            For bookings & enquiries
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orchid-600 to-orchid-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-playfair font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <a
                  href="tel:+919679042015"
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-gold-400 text-orchid-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-orchid-100">Call Us</p>
                    <p className="text-lg font-semibold">+91 96790 42015</p>
                  </div>
                </a>

                <a
                  href="tel:+917001937559"
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-gold-400 text-orchid-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-orchid-100">Call Us</p>
                    <p className="text-lg font-semibold">+91 70019 37559</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-orchid-50 p-8 rounded-2xl border-2 border-orchid-200">
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
                Why Book With Us?
              </h3>
              <ul className="space-y-3 text-gray-700 font-inter">
                <li className="flex items-start space-x-2">
                  <span className="text-orchid-600 font-bold">✓</span>
                  <span>Instant confirmation and flexible booking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orchid-600 font-bold">✓</span>
                  <span>Personalized event planning assistance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orchid-600 font-bold">✓</span>
                  <span>Competitive pricing with no hidden costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orchid-600 font-bold">✓</span>
                  <span>Dedicated support throughout your event</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orchid-50 to-white p-8 rounded-2xl shadow-xl border border-orchid-100 flex items-center justify-center">
            <div className="text-center w-full">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                  Chat with Us on WhatsApp
                </h3>
                <p className="text-gray-600 font-inter mb-8">
                  Click the button below to start a conversation with us on WhatsApp. We're here to help with your booking enquiries!
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => openWhatsApp(whatsappNumber1)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-lg font-inter font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </button>

                <p className="text-sm text-gray-500 font-inter mt-4">
                  Or contact us directly at +91 96790 42015
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
