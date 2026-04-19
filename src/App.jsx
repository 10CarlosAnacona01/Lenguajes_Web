import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import TeamSection from "./components/TeamSection.jsx";
import ReviewsSection from "./components/ReviewsSection.jsx";
import BookingSection from "./components/BookingSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  /* Smooth scroll para links internos creados dinámicamente */
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      if (window.UIkit) {
        window.UIkit.scroll(anchor).scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <GallerySection />
        <TeamSection />
        <ReviewsSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
