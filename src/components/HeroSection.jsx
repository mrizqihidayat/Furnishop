import React from 'react';
import { useFetch } from '../hooks/useFetch';

const HeroSection = () => {
  const { data } = useFetch('/header');

  return (
    <section id="home" className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={data?.banner}
          alt="FurniShop"
          className="w-full h-full object-cover object-right scale-130 md:object-[center_80%] md:scale-100 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/30"></div>


        <div className="absolute bottom-0 w-full h-24 md:h-14 bg-linear-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-[30px] mb-6 md:mb-10 md:text-[64px] font-semibold leading-tight">
          {data?.title}
        </h1>

        <p className="text-[16px] px-4 mb-8 md:mb-10 md:text-[20px] font-extralight text-gray-200 max-w-2xl mx-auto ">
          {data?.description}
        </p>

        <button className="px-10 py-3 bg-white/20 backdrop-blur-md rounded-lg text-[14px] md:text-[20px] font-semibold hover:bg-white/30 transition-all cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;