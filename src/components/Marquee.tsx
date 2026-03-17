import React from 'react';

const CAR_IMAGES = [
  `${import.meta.env.BASE_URL}car-1.jpeg`,
  `${import.meta.env.BASE_URL}car-2.jpg`,
  `${import.meta.env.BASE_URL}car-3.jpg`,
  `${import.meta.env.BASE_URL}car-4.jpg`,
  `${import.meta.env.BASE_URL}car-5.jpg`,
  `${import.meta.env.BASE_URL}car-6.jpg`,
  `${import.meta.env.BASE_URL}car-7.jpg`,
];

export const Marquee: React.FC = () => {
  return (
    <div className="marquee-container overflow-hidden bg-white/50 backdrop-blur-sm border-y border-slate-200 py-2 mb-4">
      <div className="marquee-content flex gap-8 animate-marquee whitespace-nowrap">
        {[...CAR_IMAGES, ...CAR_IMAGES].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Car ${idx}`}
            className="h-32 w-48 object-cover rounded-lg shadow-md"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
    </div>
  );
};
