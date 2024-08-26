// src/ProductSection.js

import React from 'react';
import { ProductContent } from './ProductContent';

const ProductSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className={`text-2xl md:text-4xl ${ProductContent.colors.mainHeadingColor} ${ProductContent.fonts.mainHeadingFont}`}>
          {ProductContent.mainHeading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ProductContent.products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={product.imageSrc} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-center font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
        {/* Call to Action Button */}
        <div className="text-center my-8 animate-slow-shake">
        <button
          className={`${ProductContent.colors.ctaButtonBg} ${ProductContent.fonts.buttonFont} text-white py-3 px-6 rounded-full  text-lg`}
        >
          {ProductContent.ctaButtonText}
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
