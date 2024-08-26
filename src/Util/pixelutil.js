// src/lib/fbpixel.js

export const link="https://rzp.io/l/Editingpack2024"
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && !window.fbq) {
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '3859371431056333'); // Replace with your Pixel ID
    fbq('track', 'PageView');
  }
};

export const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

// Function to handle checkout
export const handleCheckout = () => {
  localStorage.setItem("clickedOnBuy", true);
  fbq('track', 'InitiateCheckout', {
    value: 199,
    currency: 'Rs',
  });

  // Open the specified link
 window.location.href = "https://rzp.io/l/Editingpack2024";
};


