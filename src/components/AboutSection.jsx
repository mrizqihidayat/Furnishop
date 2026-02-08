import React from 'react';
import about from '../assets/about.png';
import shape from '../assets/shape.svg';

const AboutSection = () => {

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

        <div className="relative w-full md:rounded-lg shadow-lg order-2 md:order-1">
          <img
            src={about}
            alt="About FurniShop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-[24px] md:text-[40px] font-bold mb-6 leading-tight">
            We Create Your Home <br className="hidden md:inline"/>More Aesthetic
          </h2>

          <p className="text-[14px] md:text-[18px] mb-8 leading-relaxed">
            Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business.
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start">

                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <img
                      src={shape}
                      alt="icon checklist"
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                <div className="ml-4">
                  <h4 className="text-[16px] md:text-[20px] font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[14px] md:text-[16px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;