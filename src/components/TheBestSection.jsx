import React from 'react';
import furniture from '../assets/Furniture.png';

const TheBestSection = () => {

  const features = [
    {
      title: "Valuation Services",
      desc: "Sometimes features require a short description. This can be detailed description",
    },
    {
      title: "Development of Furniture Models",
      desc: "Sometimes features require a short description. This can be detailed description",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-saira">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        <div>
          <h2 className="text-[24px] md:text-[40px] font-bold mb-12 leading-tight">
            The Best Furniture<br />Manufacturer of your choice
          </h2>

          <p className="text-[14px] md:text-[18px] mb-8 leading-relaxed">
            Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services 
          </p>
        </div>

        <div className="relative w-full md:rounded-lg shadow-lg">
          <img
            src={furniture}
            alt="About FurniShop"
            className="w-full h-100 object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default TheBestSection;