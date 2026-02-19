import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0d3d3d] to-[#1a5555] transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className={`transform transition-all duration-1000 ${fadeOut ? 'scale-95' : 'scale-100'}`}>
        <img
          src="https://customer-assets.emergentagent.com/job_843e387b-83bb-4df8-bb8e-6dcdc428d7c3/artifacts/c26lyfja_WhatsApp%20Image%202026-02-16%20at%201.46.23%20PM.jpeg"
          alt="YOU & I Salon Logo"
          className="w-64 h-64 object-contain animate-fade-in"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
