// src/CustomerSatisfaction.js

import React from 'react';
import {CustomerContent } from './CustomerContent';

const CustomerSatisfaction = () => {
  return (
    <div className="bg-white py-12 text-center">
      <div className="mb-8">
        <img 
          src="/path-to-your-image/customer-satisfaction-badge.png" 
          alt="Customer Satisfaction 100% Guarantee" 
          className="mx-auto w-52 border h-52 mb-4"
        />
        <h2 className={`text-2xl md:text-4xl ${CustomerContent.colors.mainHeadingColor} ${CustomerContent.fonts.mainHeadingFont}`}>
          {CustomerContent.customerSatisfaction.title}
        </h2>
      </div>

      <div className={`text-6xl md:text-8xl ${CustomerContent.colors.ratingColor} ${CustomerContent.fonts.ratingFont}`}>
        {CustomerContent.customerSatisfaction.rating}
      </div>
      <p className={`text-xl mt-2 ${CustomerContent.colors.ratingColor} ${CustomerContent.fonts.ratingDescriptionFont}`}>
        {CustomerContent.customerSatisfaction.ratingDescription}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {CustomerContent.customerSatisfaction.feedbacks.map((feedback, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 h-96 ">
            <img src={feedback.imageSrc} alt={`Feedback ${index + 1}`} className="w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <button
          className={`${CustomerContent.colors.ctaButtonBg} ${CustomerContent.fonts.buttonFont} text-white py-3 px-6 rounded-full text-lg`}
        >
          {CustomerContent. customerSatisfaction.ctaButtonText}
        </button>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
