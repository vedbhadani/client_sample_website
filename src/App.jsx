import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ContactBar from "./components/sections/ContactBar";
import About from "./components/sections/About";
import Statistics from "./components/sections/Statistics";
import Services from "./components/sections/Services";
import DoctorProfile from "./components/sections/DoctorProfile";
import Testimonials from "./components/sections/Testimonials";
import BookingForm from "./components/sections/BookingForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Statistics />
        <About />
        <Services />
        <DoctorProfile />
        <Testimonials />
        <BookingForm />
        <ContactBar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
