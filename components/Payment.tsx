'use client';
import Image from 'next/image';

export default function Payment() {
  return (
    <section id="payment" className="py-20 bg-gradient-to-br from-white via-orchid-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Payment Options
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Make secure payments using UPI. Scan the QR code below to pay instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-orchid-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-4">
                Scan & Pay
              </h3>
              <p className="text-gray-600 font-inter mb-6">
                Use any UPI app to scan and pay securely
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border-2 border-orchid-200">
                <Image
                  src="/orchid-qr.png"
                  alt="Payment QR Code"
                  width={400}
                  height={400}
                  className="w-full max-w-sm mx-auto"
                  priority
                />
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500 font-inter mb-2">UPI ID</p>
                <p className="text-lg md:text-xl font-semibold text-orchid-700 font-inter">
                  orchidgarden@sbi
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 w-full">
                <p className="text-sm text-gray-600 font-inter text-center">
                  Supported payment apps: BHIM, UPI, Yono SBI, BHIM SBI Pay, Google Pay, Paytm, WhatsApp Pay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

