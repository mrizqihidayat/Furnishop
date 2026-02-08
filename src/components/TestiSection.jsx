import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import tetsi from '../assets/testi.png';

const TestimonialSection = () => {
  const [page, setPage] = useState(1);
  
  const { data, loading } = useFetch(`/testimonials?page=${page}&limit=1`);
  
  const testimonial = data?.testimonials?.[0];

  const handlePrev = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : data?.totalPages));
  };

  const handleNext = () => {
    setPage((prev) => (prev < data?.totalPages ? prev + 1 : 1));
  };

  const NavButtons = ({ className }) => (
    <div className={`flex items-center space-x-4 ${className}`}>
      <button 
        onClick={handlePrev}
        className="w-10 h-10 cursor-pointer md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-black/10 transition-all bg-white"
      >
        <ArrowLeftIcon className="w-5 h-5 stroke-2 text-black" />
      </button>

      <button 
        onClick={handleNext}
        className="w-10 h-10 cursor-pointer md:w-12 md:h-12 rounded-full bg-[#286F6C] flex items-center justify-center hover:bg-[#1e4640] transition-all shadow-lg"
      >
        <ArrowRightIcon className="w-5 h-5 stroke-2 text-white" />
      </button>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white font-saira">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="order-1">
            <h2 className="text-[24px] md:text-[40px] font-bold text-[#23262F] mb-8 leading-tight">
              What People Are Saying<br/>About Us
            </h2>

            {loading ? (
              <p>Loading testimonial...</p>
            ) : testimonial && (
              <>
                <div className="flex items-center space-x-4 mb-6 justify-start">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-[14px] font-bold text-[#23262F] md:text-[20px">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-[#23262F] md:text-[14px]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <p className="text-[#23262F] text-[14px] md:text-[20px] leading-relaxed mb-0 md:mb-12 md: max-w-lg mx-auto md:mx-0">
                  "{testimonial.message}"
                </p>

                <NavButtons className="hidden md:flex"/>
              </>
            )}
          </div>

          <div className="order-2 relative">
            <div className="rounded-[20px] overflow-hidden h-[200px] md:h-[340px] w-full shadow-lg">
              <img 
                src={tetsi} 
                alt="Interior Design" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 flex justify-center md:hidden">
              <NavButtons />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;