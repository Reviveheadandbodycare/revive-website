import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Welcome to Revive Head & Body Care</h2>
      <p className="text-lg text-gray-700 text-center">
        Experience Japanese-style head spa, holistic body care, and professional hair services in a serene environment.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Signature Head Spa (60–100 mins)</li>
        <li>Detox & Anti-Hair Loss Treatments</li>
        <li>Full Body Massage (30–90 mins)</li>
        <li>Cupping Therapy</li>
        <li>Haircut Studio (Male & Female)</li>
      </ul>
    </section>
  );
}

function Pricing() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p>Head Spa: from $108 · Body Care: $60–$150 · Haircut: $60–$100</p>
    </section>
  );
}

function Booking() {
  return (
    <section className="p-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Book Your Appointment</h2>
      <p>We’re currently working on our online booking system. Please call or email us to schedule an appointment.</p>
      <p className="mt-4">📞 508-454-7447<br />✉️ revivenorwood@gmail.com</p>
    </section>
  );
}

function About() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p>
        Revive Head & Body Care is a sanctuary based in Norwood, MA offering scalp therapy, massage, and haircut services.
        We specialize in Japanese-style head spa treatments to promote relaxation, circulation, and hair health.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="p-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>📍 52 Broadway, Norwood, MA 02062<br />📞 508-454-7447<br />✉️ revivenorwood@gmail.com</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-slate-100 min-h-screen">
        <header className="bg-slate-300 p-6 text-center shadow">
          <h1 className="text-3xl font-bold text-slate-800">Revive Head & Body Care</h1>
          <nav className="mt-4 space-x-4">
            <Link to="/" className="text-blue-700 hover:underline">Home</Link>
            <Link to="/services" className="text-blue-700 hover:underline">Services</Link>
            <Link to="/pricing" className="text-blue-700 hover:underline">Pricing</Link>
            <Link to="/booking" className="text-blue-700 hover:underline">Booking</Link>
            <Link to="/about" className="text-blue-700 hover:underline">About</Link>
            <Link to="/contact" className="text-blue-700 hover:underline">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center p-4 bg-slate-200 mt-10">
          &copy; 2025 Revive Head & Body Care. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
