'use client';
import { useState } from 'react';
import { Phone, Mail, Send, User, Calendar, Users as UsersIcon, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitMessage('Thank you for your enquiry! We will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      date: '',
      guests: '',
      message: ''
    });
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
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

          <div className="bg-gradient-to-br from-orchid-50 to-white p-8 rounded-2xl shadow-xl border border-orchid-100">
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">
              Booking Enquiry Form
            </h3>

            {submitMessage && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg font-inter">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-orchid-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orchid-500 font-inter"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-orchid-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orchid-500 font-inter"
                  placeholder="Your contact number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-orchid-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orchid-500 font-inter"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="reception">Reception</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orchid-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orchid-500 font-inter"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  <UsersIcon className="inline w-4 h-4 mr-2" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orchid-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orchid-500 font-inter"
                  placeholder="Estimated guest count"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-orchid-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orchid-500 font-inter resize-none"
                  placeholder="Any special requirements or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orchid-600 to-orchid-700 text-white py-4 rounded-lg font-inter font-semibold hover:from-orchid-700 hover:to-orchid-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
