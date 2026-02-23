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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(160deg, #0f3d3d 0%, #1a4a4a 35%, #0d3535 70%, #143d3d 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 10s ease infinite',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#c9a96e]/20"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              left: `${15 + i * 20}%`,
              top: `${10 + (i % 2) * 40}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content - no boxes, open layout */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-600 ${
          fadeOut ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Logo - soft glow only, no frame */}
        <div
          className="mb-8"
          style={{
            animation: 'logo-reveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          }}
        >
          <img
            src="https://customer-assets.emergentagent.com/job_843e387b-83bb-4df8-bb8e-6dcdc428d7c3/artifacts/c26lyfja_WhatsApp%20Image%202026-02-16%20at%201.46.23%20PM.jpeg"
            alt="U & I Salon"
            className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-2xl"
            style={{
              boxShadow: '0 0 80px rgba(201, 169, 110, 0.2), 0 20px 60px rgba(0,0,0,0.3)',
            }}
          />
        </div>

        {/* Title - bold, spacious */}
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-[0.3em] mb-3"
          style={{
            color: '#f5f0e6',
            animation: 'text-slide-up 0.7s ease-out 0.4s forwards',
            opacity: 0,
            textShadow: '0 4px 30px rgba(0,0,0,0.4)',
          }}
        >
          U & I SALON
        </h1>
        <p
          className="text-sm tracking-[0.35em] uppercase mb-12 text-[#c9a96e]"
          style={{
            animation: 'text-slide-up 0.7s ease-out 0.6s forwards',
            opacity: 0,
          }}
        >
          Two Souls One Style
        </p>

        {/* Loading bar - minimal */}
        <div className="w-48 h-0.5 rounded-full overflow-hidden bg-white/10">
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #c9a96e, #e8d5a3)',
              animation: 'loading-bar 2.2s ease-in-out forwards',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
