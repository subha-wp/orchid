'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  category: string;
  alt: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.gallery && data.gallery.images) {
          setGalleryImages(data.gallery.images);
        }
      })
      .catch(err => console.error('Failed to load gallery content:', err));
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-orchid-600 to-gold-500 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Take a glimpse into our beautiful venue and memorable events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-inter bg-orchid-600 px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-orchid-600 p-2 rounded-full hover:bg-orchid-700 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          {galleryImages[selectedImage] && (
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
}
