
import React from 'react';

const Partners: React.FC = () => {
  const partnerLogos = [
    "https://i.ibb.co/rfvqSLm2/image.webp",
    "https://i.ibb.co/6cktLXhn/image.png",
    "https://i.ibb.co/WvKrK7Ld/image.png",
    "https://i.ibb.co/Q3CbVBsG/2025.png",
    "https://i.ibb.co/q3cWB45P/image.png",
    "https://i.ibb.co/gMSZKtTZ/2.png"
  ];

  // Double the list to create infinite loop effect
  const fullLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-20 bg-[#0d071b] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest">شركاء النجاح</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-scroll whitespace-nowrap min-w-full items-center">
          {fullLogos.map((logo, index) => (
            <div key={index} className="mx-12 shrink-0">
              <img 
                src={logo} 
                alt={`Partner ${index}`} 
                className="h-16 md:h-20 w-auto object-contain opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
