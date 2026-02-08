import React, { useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CategorySection = () => {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const { data } = useFetch('/category');

  return (
    <section className="py-8 md:py-12 bg-white font-saira overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-8 md:items-start">

          <div className="flex flex-row justify-between items-center md:block text-left md:pr-4">

            <h2 className="text-[24px] md:text-[40px] font-bold text-[#23262F] leading-tight md:w-full mb-0 mt-0 md:mb-[90px] md:mt-[32px]
">
              New In <br /> Store Now
            </h2>

            <div className="">
              <p className="text-[#23262F] text-[14px] md:text-[16px] leading-relaxed mb-0 md:mb-[48px]">
                Get the latest items <br className="inline-flex md:hidden" /> immediately with promo prices
              </p>

              <a
                href="#"
                className="hidden md:inline-flex items-center text-[16px] hover:underline transition-all"
              >
                Check All
                <ArrowRightIcon className="stroke-2 w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide lg:-mr-[calc((100vw-100%)/2)] lg:pr-32 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => {
              if (!scrollRef.current) return;
              isDown.current = true;
              startX.current = e.pageX - scrollRef.current.offsetLeft;
              scrollLeft.current = scrollRef.current.scrollLeft;
            }}
            onMouseLeave={() => {
              isDown.current = false;
            }}
            onMouseUp={() => {
              isDown.current = false;
            }}
            onMouseMove={(e) => {
              if (!isDown.current || !scrollRef.current) return;
              e.preventDefault();
              const x = e.pageX - scrollRef.current.offsetLeft;
              const walk = (x - startX.current) * 1.2;
              scrollRef.current.scrollLeft = scrollLeft.current - walk;
            }}
          >

            {data?.category?.map((item, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[200px] md:w-[260px] h-[300px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

                <h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-[18px] md:text-[28px] font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CategorySection;