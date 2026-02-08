import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { PlusIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const ProductSection = () => {
  const [page, setPage] = useState(1);

  const { data, loading } = useFetch(`/products?page=${page}&limit=8`);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= (data?.totalPages || 1)) {
      setPage(newPage);
    }
  };

  return (
    <section className="py-16 bg-white font-saira" id="products">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[24px] md:text-[40px] font-bold text-[#282828] mb-4">
            All Product
          </h2>
          <p className="text-[#282828] text-[14px] md:text-[18px] max-w-2xl mx-auto ">
            The products we provide only for you as our service are selected from the best products with number 1 quality in the world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">

          {loading ? (
            <p className="col-span-full text-center">Loading products...</p>
          ) : (
            data?.products?.map((item) => (
              <div key={item.id} className="group cursor-pointer">

                <div className="relative border border-[#102637]/10 rounded-[20px] aspect-square flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-3/4 h-3/4 object-contain mix-blend-multiply"
                  />

                  <button className="absolute cursor-pointer bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-[#D2D2D2] hover:bg-[#282828] hover:text-white rounded-full flex items-center justify-center transition-all">
                    <PlusIcon className="stroke-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                <h3 className="text-[#23262F] font-semibold text-[16px] md:text-[24px] mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center space-x-2 md:space-x-3">
                  {item.price_after_discount ? (
                    <>
                      <span className="font-normal text-[#23262F] text-[16px] md:text-[20px]">
                        ${item.price_after_discount}
                      </span>
                      <span className="text-[#23262F]/50 line-through text-[14px] md:text-[18px]">
                        ${item.price}
                      </span>
                    </>
                  ) : (
                    <span className="font-normal text-[#23262F] text-[16px] md:text-[20px]">
                      ${item.price}
                    </span>
                  )}
                </div>

              </div>
            ))
          )}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center items-center space-x-4">

          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="cursor-pointer disabled:opacity-50 transition-all"
          >
            <ArrowLeftIcon className="w-6 h-6 stroke-3 text-[#23262F]" />
          </button>

          <div className="flex space-x-4">
            {Array.from({ length: data?.totalPages || 1 }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`w-2.5 h-2.5 rounded-full border border-gray-400 transition-all ${page === pageNumber
                    ? 'bg-[#282828] border-[#282828] scale-110' 
                    : 'bg-transparent' 
                    }`}
                />
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === (data?.totalPages || 1)}
            className="cursor-pointer disabled:opacity-50 transition-all"
          >
            <ArrowRightIcon className="w-6 h-6 stroke-3 text-[#23262F]" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProductSection;