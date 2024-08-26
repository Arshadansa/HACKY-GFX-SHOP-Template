import React, { useState, useEffect } from "react";
import faqData from "./FaqData.js"; // Assuming the file is correctly named
import { handleCheckout } from "../../Util/pixelutil.js"
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());


  
  // Function to calculate the time left based on the last saved time in localStorage
  function calculateTimeLeft() {
    const savedTime = localStorage.getItem("timerStart");
    const currentTime = new Date().getTime();
    const sixHoursInMillis = 6 * 60 * 60 * 1000;

    if (savedTime) {
      const elapsedTime = currentTime - savedTime;
      if (elapsedTime < sixHoursInMillis) {
        return sixHoursInMillis - elapsedTime;
      }
    }

    // If no saved time or 6 hours passed, reset timer
    localStorage.setItem("timerStart", currentTime);
    return sixHoursInMillis;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 1000) {
          // Reset timer when it reaches zero
          localStorage.setItem("timerStart", new Date().getTime());
          return 6 * 60 * 60 * 1000;
        } else {
          return prevTimeLeft - 1000;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className={`text-2xl ${faqData.fonts.headerFont} ${faqData.colors.headerColor} text-center my-6`}>
        GOT QUESTIONS? WE GOT ANSWERS!!!
      </h1>
      {faqData.faqDataArray.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <h2 className={`text-lg ${faqData.fonts.subHeadingFont}`}>
              {faq.question}
            </h2>
            <span className="text-2xl">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className={`mt-4 ${faqData.fonts.descriptionFont} ${faqData.colors.descriptionColor}`}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}

    {/* Contact Us Section */}
<div className="my-10 text-center ">
  <a
    href="mailto:hackyabhay@gmail.com"
    className={`${faqData.colors.mainHeadingColor} text-lg ${faqData.fonts.subHeadingFont} underline`}
  >
    Contact Us
  </a>
  <p className={`text-lg ${faqData.fonts.subHeadingFont} mt-4`}>
    Email: <a href="mailto:hackyabhay@gmail.com" className="underline text-blue-600">hackyabhay@gmail.com</a>
  </p>
  <p className={`text-lg ${faqData.fonts.subHeadingFont}`}>
    Phone: <a href="tel:+917470391011" className="underline text-blue-600">7470391011</a>
  </p>
</div>

      {/* Bottom Disclaimer Section */} 
      <div className="text-center text-gray-500 text-sm  mb-60 ">
        <p className="mb-4">
          This site is not a part of the Facebook™ website or Facebook™ Inc.
          Additionally, This site is NOT endorsed by Facebook™ in any way.
          FACEBOOK™ is a trademark of FACEBOOK™, Inc.
        </p>
        <p>
          As stipulated by law, we cannot and do not make any guarantees about
          your ability to get results or earn any money with our ideas,
          information, tools, or strategies. I just want to help you by giving
          great content, direction, and strategies that worked well for me and
          my students and that I believe can help you move forward. All of my
          terms, privacy policies, and disclaimers for this program and website
          can be accessed via the links. I feel transparency is important, and I
          hold ourselves (you & me) to a high standard of integrity. Thanks for
          stopping by. I hope this training and content bring you a lot of value
          & results.
        </p>
      </div>


{/* Countdown Timer */}
<div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white shadow-lg">
  <div className="flex items-center justify-center lg:gap-10 flex-wrap w-full border-t-2 border-purple-800">
    <div className="text-center py-4 flex items-center gap-10">
      <p className="font-bold md:4xl  text-2xl text-yellow-300">
        {faqData.countdownLabel || "OFFER ENDS IN"}
      </p>
      <p className="text-xl md:text-3xl font-semibold text-white bg-yellow-500 py-2 px-4 rounded-lg">
        {formatTime(timeLeft)}
      </p>
    </div>

    {/* Buy Now Button */}
    <div className="text-center py-4">
      <button onClick={handleCheckout}
        className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white py-2 px-6 rounded-full text-base shadow-md hover:shadow-lg transition-transform transform hover:scale-105 animate-slow-shake font-semibold"
      >
        {faqData.buyButtonText || "BUY NOW"}
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default FAQ;
