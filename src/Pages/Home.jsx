import React from "react";
import HeroSection from "../Compoents/HeroSection/HeroSection";
import ProductSection from "../Compoents/ProductSection/ProductSection";
import CustomerSatisfaction from "../Compoents/CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "../Compoents/Faq/Faq";
import NotificationBar from '../Compoents/NotificationBar'; // Adjust the path as necessary
const Home = () => {
  return (
    <div className="p-3 lg:p-0">
       <NotificationBar />
      <HeroSection />
      <ProductSection />
      <CustomerSatisfaction />
      <FAQ />
    </div>
  );
};

export default Home;
