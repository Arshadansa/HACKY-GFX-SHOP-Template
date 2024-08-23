import React from "react";
import HeroSection from "../Compoents/HeroSection/HeroSection";
import ProductSection from "../Compoents/ProductSection/ProductSection";
import CustomerSatisfaction from "../Compoents/CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "../Compoents/Faq/Faq";

const Home = () => {
  return (
    <div className="p-3 lg:p-0">
      <HeroSection />
      <ProductSection />
      <CustomerSatisfaction />
      <FAQ />
    </div>
  );
};

export default Home;
