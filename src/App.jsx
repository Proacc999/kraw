
import './App.css'

function App() {

const destinations = [
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
];

  return (
    <>
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the World with Us
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Unforgettable journeys. Handpicked destinations.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Destinations
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p>We offer competitive prices on top destinations.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Handpicked Tours</h3>
            <p>Carefully curated experiences just for you.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Travel worry-free with our expert support.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Travelers Say</h2>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <p className="italic mb-4">
            “This was the best travel experience of my life. Everything was
            perfectly organized!”
          </p>
          <h4 className="font-semibold">— Sarah Andrew Johnson</h4>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="mb-8">
          Start planning your dream vacation today.
        </p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © 2025 TravelX. All rights reserved. Branch(FinMed) y otra
      </footer>
    </div>
    </>
  )
}

export default App