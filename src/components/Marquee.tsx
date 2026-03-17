import React from 'react';

const CAR_IMAGES = [
  '/car-1.jpeg',
  '/car-2.jpg',
  '/car-3.jpg',
  '/car-4.jpg',
  '/car-5.jpg',
  '/car-6.jpg',
  '/car-7.jpg',
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
