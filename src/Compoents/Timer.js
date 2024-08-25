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