import React from 'react';

const marqueeItems = [
  "Pizza", "BBQ", "Shawarma", "Karahi", "Biryani",
  "Nashta", "Shakes", "Burgers", "Deals", "Rooftop Seating"
];

export const Marquee = () => {
  return (
    <div className="bg-[#FFC929] text-[#141414] py-4 overflow-hidden whitespace-nowrap shadow-md select-none border-y-2 border-black/10">
      <div className="inline-block animate-marquee font-black text-xl md:text-2xl uppercase tracking-wider flex items-center space-x-8">
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="flex items-center space-x-8">
                <span>{item}</span>
                <span className="text-[#E8262B]">✦</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
