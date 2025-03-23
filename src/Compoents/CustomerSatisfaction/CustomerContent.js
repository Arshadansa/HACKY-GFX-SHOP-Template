// Import images
import proof1 from "../../images/proofs/proof1.webp";
import proof2 from "../../images/proofs/proof2.webp";
import proof3 from "../../images/proofs/proof3.webp";
import proof4 from "../../images/proofs/proof4.webp";
import proof5 from "../../images/proofs/proof5.webp";
import proof6 from "../../images/proofs/proof6.webp";

// Export CustomerContent object
export const CustomerContent = {
  headerTitle: "HACKY GFX SHOP",
  notificationText: "Get the World's Biggest Video Editing Pack at the Lowest Price of Just ₹199!",
  mainHeading: "EVERYTHING YOU'LL GET INSIDE:",

  // Customer Satisfaction Section
  customerSatisfaction: {
    title: "WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US",
    rating: "99.4%",
    ratingDescription: "Average Ratings 🔥",
    ctaButtonText: "⚡ Get Everything at ₹199",
    feedbacks: [
      {
        imageSrc: proof1,
      },
      {
        imageSrc: proof2,
      },
      {
        imageSrc: proof3,
      },
      {
        imageSrc: proof4,
      },
      {
        imageSrc: proof5,
      },
      {
        imageSrc: proof6,
      },
    ],
  },
  
  // Colors
 // Colors
 colors: {
  headerColor: "text-white",
  notificationBorderColor: "border-red-600",
  notificationIconColor: "text-red-600",
  mainHeadingColor: "text-yellow-600",
  ratingColor: "text-orange-500",
  ctaButtonBg: "bg-red-600 hover:bg-red-700",
},

  // Fonts
  fonts: {
    headerFont: "font-bold",
    mainHeadingFont: "font-extrabold",
    ratingFont: "font-bold",
    ratingDescriptionFont: "font-medium",
  },
};
