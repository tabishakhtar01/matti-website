import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import About from "./components/About";
import Products from "./components/Products";
import Video from "./components/Video";
import BestSellers from "./components/BestSellers";
import Gif from "./components/Gif";
import Footer from "./components/Footer";
import Features from "./components/Features";
import SubscriptionBar from "./components/SubscriptionBar";
import "./components/assets/fonts/Fontspring-DEMO-theseasons-bd.ttf";

const App = () => {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <Categories />
      <About />
      <Video />
      <Products />
      <BestSellers />
      <Gif />
      <Features />
      <SubscriptionBar />
      <Footer />
    </div>
  );
};

export default App;
