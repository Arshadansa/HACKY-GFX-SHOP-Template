import React from "react";
import { content } from "./HeroContent";
import heroImage from "./hero.png"; // Assuming you have a hero image file
import { handleCheckout } from "../../Util/pixelutil";

function HeroSection() {
  return (
    <div className="bg-white p-4 mt-10">
      {/* Header Section */}
      <div className="text-center py-4 animate-fade-in">
        <h1
          className={`text-2xl md:text-4xl ${content.colors.headerColor} ${content.fonts.headerFont}`}
        >
          {content.headerTitle}
        </h1>
      </div>

     

      {/* Notification Bar */}
      <div
        className={`flex justify-center max-w-screen-xl mx-auto items-center border-2 rounded-full py-2 px-4 mb-4 ${content.colors.notificationBorderColor} animate-slide-in`}
      >
        <span
          role="img"
          aria-label="bell"
          className={`text-2xl mr-2 ${content.colors.notificationIconColor}`}
        >
          🔔
        </span>
        <p className="text-black text-center">
          <span className="font-bold">"{content.notificationText}"</span> 🎁
        </p>
      </div>

      {/* Main Content */}
      <div className="text-center animate-fade-in-up">
        <p
          className={`text-lg md:text-xl ${content.colors.descriptionColor} ${content.fonts.subHeadingFont}`}
        >
          {content.subHeading}
        </p>
        <p
          className={`text-black ${content.fonts.subHeadingFont} text-lg md:text-xl mb-4`}
        >
          {content.highlightText}
        </p>
        <h2
          className={`text-3xl md:text-5xl ${content.colors.mainHeadingColor} ${content.fonts.mainHeadingFont}`}
        >
          {content.mainHeading}
        </h2>
        <p
          className={`mt-4 max-w-2xl mx-auto ${content.colors.descriptionColor} ${content.fonts.descriptionFont}`}
        >
          {content.description}
        </p>
        <p
          className={`text-sm mt-2 ${content.colors.noteColor} ${content.fonts.noteFont}`}
        >
          {content.noteText}
        </p>
      </div>

 {/* Hero Image with Floating Animation */}
 <div className="flex justify-center my-8">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl animate-float"
        />
      </div>

      {/* Call to Action Button */}
      <div className="text-center my-8 animate-slow-shake">
        <button onClick={handleCheckout}
          className={`${content.colors.ctaButtonBg} ${content.fonts.buttonFont} text-white py-3 px-6 rounded-full text-lg`}
        >
          {content.ctaButtonText}
        </button>
        
      </div>
      
    </div>
  );
}

export default HeroSection;
