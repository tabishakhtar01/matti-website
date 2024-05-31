import React, { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import About from "./components/About";
import Products from "./components/Products";
import Video from "./components/Video";
import BestSellers from "./components/Bestsellers";
import Gif from "./components/Gif";
import Footer from "./components/Footer";
import Features from "./components/Features";
import SubscriptionBar from "./components/SubscriptionBar";
import "./components/assets/fonts/Fontspring-DEMO-theseasons-bd.ttf";

const App = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContacts = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar
        onAboutClick={scrollToAbout}
        onProductsClick={scrollToProducts}
        onContactClick={scrollToContacts}
        onServicesClick={scrollToServices}
      />
      <Hero />
      <Categories />
      <div ref={aboutRef}>
        <About />
      </div>
      <Video />
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={servicesRef}>
        <BestSellers />
      </div>
      <Gif />
      <Features />
      <SubscriptionBar />
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
