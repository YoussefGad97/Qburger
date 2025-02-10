import React from "react";
import "../styles/Home.scss";
import About from '../components/About';
import SpecialOffers from '../components/SpecialOffers';
import BurgerGallery from '../components/BurgerGallery';


const Home = () => {
  return (
    <div className="home-page">

      {/* Landing Section */}
      <section id="landing" className="landing-section">
      </section>

      {/* About Section */}
      <About />

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Most Popular Section */}
      <BurgerGallery />

      {/* Make Your Burger Section */}
      <section id="make-your-burger" className="page-section">
        <h2>Create Your Burger</h2>
        <p>Customize your perfect burger...</p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="page-section">
        <h2>Customer Testimonials</h2>
        <p>Hear what our customers are saying...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="page-section">
        <h2>Contact Us</h2>
        <p>Get in touch with us...</p>
      </section>
    </div>
  );
};

export default Home;
