// src/CustomerSatisfaction.js

import React from 'react';
import {CustomerContent } from './CustomerContent';

const CustomerSatisfaction = () => {
  return (
    <div className="bg-white py-12 text-center">
   <div className="flex flex-col items-center justify-center mb-8">
   <div className="relative mb-4 w-52 h-52 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 border-8 border-yellow-700 flex items-center justify-center">
  <span className="text-white text-4xl font-bold tracking-wider">100%</span>
</div>

  <h2 className="text-2xl md:text-4xl text-yellow-600 font-extrabold text-center">
    100% Satisfaction Guarantee
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
