import React, { useState } from "react";
import faqData from "./FaqData.js"; // Assuming the file is correctly named

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
      <div className="my-10 text-center">
        <a
          href="#contact"
          className={`${faqData.colors.mainHeadingColor} text-lg ${faqData.fonts.subHeadingFont} underline`}
        >
          Contact Us
        </a>
      </div>

      {/* Bottom Disclaimer Section */}
      <div className="text-center text-gray-500 text-sm">
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
      <div className="flex items-center border-t-4  justify-center lg:gap-16 flex-wrap">

      <div
        className={`text-center  py-6 flex items-center gap-16`}
        style={{ borderTopColor: faqData.colors.notificationBorderColor }}
      >
        <p className={`font-bold text-xl ${faqData.colors.countdownLabelColor}`}>
          {faqData.countdownLabel || "OFFER ENDS IN"}
        </p>
        <p className={`text-2xl md:text-4xl font-bold ${faqData.colors.countdownTimeColor}`}>
          {faqData.countdownTime || "01:12:58:28"}
        </p>
      </div>

      {/* Buy Now Button */}
      <div className="text-center py-6">
        <button
          className={`${faqData.colors.buyButtonBg} ${faqData.fonts.buttonFont} text-white py-3 px-6 rounded-full text-lg`}
        >
          {faqData.buyButtonText || "BUY NOW"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
