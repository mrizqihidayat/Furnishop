import React from 'react';
import { useFetch } from '../hooks/useFetch';

const StatsBar = () => {

  const { data, loading } = useFetch('/data');

  const stats = [
    { label: "Year Experience", value: data?.experience },
    { label: "Opened in the country", value: data?.country },
    { label: "Furniture sold", value: data?.sold },
    { label: "Variant Furniture", value: data?.variant },
  ];

return (
    <div className="relative z-20 px-10 max-w-6xl mx-auto md:px-6">
      <div className="bg-[#285A52] rounded-2xl p-8 md:p-8 shadow-xl -mt-44 md:-mt-24 relative">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                text-center px-4 border-white
                ${index % 2 === 0 ? 'border-r-2' : ''} 
                md:border-r-4 md:last:border-none
              `}
            >
              <h3 className="text-[24px] md:text-[40px] font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-[14px] md:text-[18px] text-white font-light mx-0 md:mx-12">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;