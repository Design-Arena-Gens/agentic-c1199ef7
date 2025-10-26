'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
      breed: 'Golden Retriever',
      service: 'Full Grooming Package',
    },
    {
      before: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1612536981579-27e574b37e9d?w=600&q=80',
      breed: 'Poodle',
      service: 'Deluxe Spa Package',
    },
    {
      before: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&q=80',
      breed: 'Shih Tzu',
      service: 'Full Grooming Package',
    },
    {
      before: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=600&q=80',
      breed: 'Labrador',
      service: 'Basic Bath Package',
    },
    {
      before: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80',
      breed: 'Yorkshire Terrier',
      service: 'Deluxe Spa Package',
    },
    {
      before: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&q=80',
      breed: 'Husky',
      service: 'Full Grooming Package',
    },
  ]

  const showcaseImages = [
    { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80', alt: 'Happy groomed Golden Retriever' },
    { url: 'https://images.unsplash.com/photo-1612536981579-27e574b37e9d?w=800&q=80', alt: 'Freshly groomed Poodle' },
    { url: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=80', alt: 'Adorable Shih Tzu after grooming' },
    { url: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=800&q=80', alt: 'Clean and happy Labrador' },
    { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80', alt: 'Styled Yorkshire Terrier' },
    { url: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80', alt: 'Beautiful groomed Husky' },
    { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80', alt: 'Cute puppy before grooming' },
    { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', alt: 'Fluffy dog portrait' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earthy-500 to-sage-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Our Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            See the amazing transformations we create every day
          </p>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-earthy-800">Before & After Transformations</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Witness the incredible difference our professional grooming makes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.before}
                      alt={`${item.breed} before grooming`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.after}
                      alt={`${item.breed} after grooming`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-sage-50">
                  <h3 className="font-bold text-lg text-earthy-700 mb-1">{item.breed}</h3>
                  <p className="text-gray-600 text-sm">{item.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section className="py-16 px-4 bg-earthy-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-earthy-800">Our Happy Clients</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Every dog leaves looking and feeling their absolute best
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer card-hover"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Image View */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-smooth"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <img
            src={showcaseImages[selectedImage].url}
            alt={showcaseImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-5xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Dogs Groomed</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-sage-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-earthy-600 mb-2">4.9⭐</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-500 to-sage-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want Your Dog to Look This Amazing?</h2>
          <p className="text-xl mb-8">Book your appointment today and join our gallery of happy, beautiful dogs!</p>
          <a
            href="/booking"
            className="inline-block bg-white text-primary-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-earthy-100 hover:scale-110 transition-smooth shadow-lg"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  )
}
