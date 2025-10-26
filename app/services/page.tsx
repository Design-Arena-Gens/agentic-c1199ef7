import Link from 'next/link'

export default function Services() {
  const services = [
    {
      name: 'Basic Bath Package',
      price: '$40 - $60',
      duration: '1-2 hours',
      icon: '🛁',
      color: 'primary',
      features: [
        'Warm water bath with premium shampoo',
        'Thorough brushing and detangling',
        'Blow dry and fluff',
        'Nail trim',
        'Ear cleaning',
        'Sanitary trim',
      ],
    },
    {
      name: 'Full Grooming Package',
      price: '$65 - $95',
      duration: '2-3 hours',
      icon: '✂️',
      color: 'sage',
      features: [
        'Everything in Basic Bath',
        'Full-body haircut styled to breed standard',
        'Face, feet, and tail styling',
        'Teeth brushing',
        'Paw pad treatment',
        'Cologne or perfume',
      ],
    },
    {
      name: 'Deluxe Spa Package',
      price: '$95 - $150',
      duration: '3-4 hours',
      icon: '💎',
      color: 'earthy',
      features: [
        'Everything in Full Grooming',
        'Deep conditioning treatment',
        'Aromatherapy bath',
        'Pawdicure with nail polish',
        'Blueberry facial',
        'Bandana or bow tie',
        'Professional photo session',
      ],
    },
    {
      name: 'Puppy Introduction',
      price: '$35 - $50',
      duration: '45 minutes',
      icon: '🐕',
      color: 'primary',
      features: [
        'Gentle introduction to grooming',
        'Mini bath experience',
        'Basic brush and comb',
        'Nail tip trim',
        'Positive reinforcement training',
        'Take-home care tips',
      ],
    },
    {
      name: 'Senior Dog Care',
      price: '$70 - $100',
      duration: '2-3 hours',
      icon: '🦮',
      color: 'sage',
      features: [
        'Extra gentle handling',
        'Warm hydrotherapy bath',
        'Mobility-friendly grooming table',
        'Joint-friendly positioning',
        'Senior-specific products',
        'Health check and report',
      ],
    },
    {
      name: 'À La Carte Services',
      price: 'Varies',
      duration: '15-30 minutes',
      icon: '⭐',
      color: 'earthy',
      features: [
        'Nail trim only - $15',
        'Teeth brushing - $10',
        'Ear cleaning - $10',
        'Gland expression - $15',
        'De-shedding treatment - $20-$35',
        'Flea & tick treatment - $15-$25',
      ],
    },
  ]

  const addOns = [
    { name: 'De-shedding Treatment', price: '$20-$35' },
    { name: 'Flea & Tick Treatment', price: '$15-$25' },
    { name: 'Medicated Bath', price: '$10-$15' },
    { name: 'Teeth Brushing', price: '$10' },
    { name: 'Nail Grinding', price: '$10' },
    { name: 'Blueberry Facial', price: '$15' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sage-500 to-primary-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Professional grooming packages tailored to your dog's needs and your budget
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover border-t-4"
                style={{
                  borderTopColor: service.color === 'primary' ? '#0ea5e9' : service.color === 'sage' ? '#5d7963' : '#a88f6b'
                }}
              >
                <div
                  className={`p-6 bg-gradient-to-br ${
                    service.color === 'primary'
                      ? 'from-primary-50 to-primary-100'
                      : service.color === 'sage'
                      ? 'from-sage-50 to-sage-100'
                      : 'from-earthy-50 to-earthy-100'
                  }`}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-earthy-800">{service.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="font-semibold">⏱️ {service.duration}</span>
                  </div>
                  <p className="text-3xl font-bold text-earthy-700">{service.price}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-earthy-700">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 bg-sage-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-earthy-800">Add-On Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Enhance your grooming package with these premium add-ons
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-earthy-50 rounded-lg hover:bg-earthy-100 transition-smooth"
                >
                  <span className="font-semibold text-earthy-700">{addon.name}</span>
                  <span className="text-primary-600 font-bold text-lg">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-earthy-800">Important Information</h2>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-6">
            <h3 className="font-bold text-lg mb-2 text-primary-800">📏 Pricing Factors</h3>
            <p className="text-gray-700">
              Final pricing depends on your dog's size, coat condition, behavior, and breed-specific requirements.
              Prices shown are starting rates for small dogs in good coat condition.
            </p>
          </div>
          <div className="bg-sage-50 border-l-4 border-sage-500 p-6 rounded-r-lg mb-6">
            <h3 className="font-bold text-lg mb-2 text-sage-800">⏰ Appointment Duration</h3>
            <p className="text-gray-700">
              Grooming times vary based on your dog's size, temperament, and service selection.
              We never rush - quality and your pet's comfort are our top priorities.
            </p>
          </div>
          <div className="bg-earthy-50 border-l-4 border-earthy-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2 text-earthy-800">🎟️ Package Deals</h3>
            <p className="text-gray-700">
              Ask about our loyalty program! Book 5 grooming sessions and get the 6th at 50% off.
              Senior citizens and service dog handlers receive 10% off all services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-500 to-sage-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-8">Choose the perfect package for your furry friend!</p>
          <Link
            href="/booking"
            className="inline-block bg-white text-primary-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-earthy-100 hover:scale-110 transition-smooth shadow-lg"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  )
}
