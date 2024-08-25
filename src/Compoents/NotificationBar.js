import React, { useEffect, useState } from 'react';

const names = [
  'Abhay S.', 'Rajesh K.', 'Simran P.', 'Ayesha R.', 'Rohan M.',
  'Priya D.', 'Amit T.', 'Neha B.', 'Vikram G.', 'Anjali S.',
];

const NotificationBar = () => {
  const [currentName, setCurrentName] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const updateName = () => {
      setFadeOut(true);
      setTimeout(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setCurrentName(randomName);
        setFadeOut(false);
      }, 500); // Duration matches the fade-out animation
    };

    updateName();
    const intervalId = setInterval(updateName, 5000); // Update name every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-purple-600 text-white py-2 px-4 shadow-md z-50 flex justify-center items-center notification-bar ${
        fadeOut ? 'fade-out' : ''
      }`}
    >
      <span className="text-sm font-medium">
        🎉 {currentName} just purchased the Video Editing Pack for ₹199!
      </span>
    </div>
  );
};

export default NotificationBar;
