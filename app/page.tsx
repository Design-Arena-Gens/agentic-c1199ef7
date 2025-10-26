import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const features = [
    {
      icon: '✨',
      title: 'Professional Grooming',
      description: 'Expert groomers with years of experience',
    },
    {
      icon: '❤️',
      title: 'Loving Care',
      description: 'We treat every dog like family',
    },
    {
      icon: '🏆',
      title: 'Premium Products',
      description: 'Only the best, pet-safe products',
    },
    {
      icon: '📅',
      title: 'Easy Booking',
      description: 'Book online in just a few clicks',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The best grooming experience! My Golden Retriever always comes home looking and smelling amazing.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      text: 'Professional, caring, and detail-oriented. I wouldn\'t trust anyone else with my poodle.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      text: 'My anxious rescue dog feels comfortable here. The staff is incredibly patient and gentle.',
      rating: 5,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-sage-500/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1600&q=80')",
          }}
        ></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Welcome to Paws Perfect Grooming
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Professional grooming services that make your furry friend look and feel their best
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-primary-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-earthy-100 hover:scale-110 transition-smooth shadow-lg animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-earthy-800">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-smooth card-hover bg-sage-50"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-earthy-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-earthy-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-earthy-800">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            From basic baths to full spa treatments, we've got your pup covered
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-6xl">🛁</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-earthy-700">Basic Bath</h3>
                <p className="text-gray-600 mb-4">Complete wash, dry, and brush</p>
                <p className="text-3xl font-bold text-primary-600 mb-4">$40+</p>
                <Link
                  href="/services"
                  className="block text-center bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-smooth"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                <span className="text-6xl">✂️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-earthy-700">Full Grooming</h3>
                <p className="text-gray-600 mb-4">Bath, haircut, nails, and ears</p>
                <p className="text-3xl font-bold text-sage-600 mb-4">$65+</p>
                <Link
                  href="/services"
                  className="block text-center bg-sage-500 text-white py-2 rounded-lg hover:bg-sage-600 transition-smooth"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-earthy-400 to-earthy-600 flex items-center justify-center">
                <span className="text-6xl">💎</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-earthy-700">Deluxe Spa</h3>
                <p className="text-gray-600 mb-4">Premium treatment package</p>
                <p className="text-3xl font-bold text-earthy-600 mb-4">$95+</p>
                <Link
                  href="/services"
                  className="block text-center bg-earthy-500 text-white py-2 rounded-lg hover:bg-earthy-600 transition-smooth"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-earthy-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-sage-50 p-6 rounded-lg shadow-lg card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-earthy-700">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-500 to-sage-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Pamper Your Pup?</h2>
          <p className="text-xl mb-8">Book your appointment today and see the Paws Perfect difference!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-primary-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-earthy-100 hover:scale-110 transition-smooth shadow-lg"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-primary-600 transition-smooth"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 px-4 bg-earthy-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-earthy-800">Business Hours</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold text-earthy-700">Monday - Friday</span>
                <span className="text-gray-600">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold text-earthy-700">Saturday</span>
                <span className="text-gray-600">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold text-earthy-700">Sunday</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-semibold text-earthy-700">Holidays</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
