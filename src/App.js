import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import DownloadPage from './Pages/DownloadPage';  // Import the DownloadPage component
import { initFacebookPixel } from './Util/pixelutil';  // Import the Facebook Pixel utility

function App() {
  useEffect(() => {
    initFacebookPixel();  // Initialize Facebook Pixel on app load
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Page Route */}
        <Route path="/download" element={<DownloadPage />} />  {/* Download Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
