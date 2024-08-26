import React from 'react';
import bundleImage from '../Compoents/HeroSection/hero.png'; // Adjust the path according to your project structure
import file from "../Pages/resource.pdf";

const DownloadPage = () => {
  const hasPurchased = localStorage.getItem("clickedOnBuy") === "true";


  return (
    hasPurchased ? (
      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white flex flex-col justify-center items-center">
        {/* Logo */}


        {/* Bundle Image */}
        <img
          src={bundleImage}
          alt="Bundle"
          className="w-64 h-64 mb-8"
        />

        {/* Thank You Message */}
        <h1 className="text-3xl font-extrabold mb-4 text-center">
          Thank You For Purchasing!
        </h1>
        <p className="text-xl text-center mb-6">
          CLICK ON THE DOWNLOAD BUTTON TO GET YOUR PACK
        </p>

        {/* Order Details */}
        <div className="bg-white text-purple-700 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Order Details</h2>
          <p className="text-lg font-medium mb-2">
            BIGGEST VIDEO EDITING ASSETS BUNDLE WITH 20,000+ ASSETS
          </p>
          <p className="text-lg mb-2">Product Subtotal: ₹199.00</p>
          <p className="text-lg mb-2">Payment Method: Razorpay</p>
          <p className="text-lg font-bold mb-4">Total: ₹199.00</p>
        </div>

        {/* Download Button */}
        <a onClick={
          localStorage.setItem("clickedOnBuy",false)
        }
          href={file}  // Adjust the path according to your project structure
          download
          className="mt-8 mb-10 bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          DOWNLOAD
        </a>
      </div>
    ) : (
      <div className="min-h-screen  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold text-center">
          You need to purchase the bundle to access this page.
        </h1>
        <a  href='/' className=' bg-white text-black rounded-lg p-2 mt-8 font-bold'>
          BUY NOW
        </a>
      </div>
    )
  );
};

export default DownloadPage;
