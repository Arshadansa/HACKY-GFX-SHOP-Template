import CustomerSatisfaction from "./Compoents/CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "./Compoents/Faq/Faq";
import HeroSection from "./Compoents/HeroSection/HeroSection";
import ProductSection from "./Compoents/ProductSection/ProductSection";
import logo from "./logo.svg";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="">
      <HeroSection />
      <ProductSection />
      <CustomerSatisfaction />
      <FAQ />
    </div>
  );
}

export default App;
