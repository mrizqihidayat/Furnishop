import React, { useState } from 'react';
import banner from '../assets/subscribeBanner.png';
import { usePost } from '../hooks/usePost'; // Import hook baru

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { postData, loading, error } = usePost('/subscribe');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    try {
      const result = await postData({ email });
      
      setSuccessMessage(result.message || 'Subscribed successfully!');
      setEmail('');
    } catch (err) {
      console.log("Gagal subscribe");
    }
  };

  return (
    <section className="font-saira">
      <div className=" mx-auto">
        <div 
          className="relative w-full h-[250px] md:h-[450px] overflow-hidden bg-cover bg-center md:bg-left flex items-center shadow-2xl"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>

          <div className="relative z-10 w-full md:w-1/2 px-6 md:pr-20 text-center md:text-left md:ml-auto mt-4 md:mt-0">
            <h2 className="text-[24px] md:text-[40px] font-semibold text-white mb-5 leading-tight">
              Get more discount <br className="hidden md:inline"/>Off <br className="inline md:hidden"/>your order
            </h2>
            <p className="text-white/90 mb-8 text-[14px] md:text-[20px] font-light">
              Join our mailing list
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white px-5 py-3 rounded-lg text-gray-900 text-[12px] md:text-[16px] outline-none focus:none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                disabled={loading} 
                className="bg-[#282828] cursor-pointer text-white px-6 py-3 rounded-lg font-bold text-[12px] md:text-[20px] hover:bg-black transition-all disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? 'Sending...' : 'Shop Now'}
              </button>
            </form>

            {successMessage && (
              <p className="mt-1 text-[10px] font-medium text-green-300 text-left md:mt-3 md:text-[16px]">
                {successMessage}
              </p>
            )}
            
            {error && (
              <p className="mt-1 text-[10px] font-medium text-red-300 text-left md:mt-3 md:text-[16px]">
                {error}
              </p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;