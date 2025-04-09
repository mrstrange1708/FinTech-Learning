import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-700">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold">Fintech Learning</h2>
          
          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm">Email *</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-2 bg-transparent border-b border-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="subscribe" className="w-4 h-4" />
              <label htmlFor="subscribe" className="text-sm">
                Yes, subscribe me to your newsletter. *
              </label>
            </div>

            <button
              type="submit"
              className="bg-white text-black py-2 px-4 w-full font-semibold hover:bg-gray-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <p>80199-44289</p>
            <a href="https://mrstrange1708.github.io/Profolio/">Contact Me</a>
            <p>
                NH44, Chowk, Bahalgarh,<br />
                Sonipat, Kishora, Haryana 131001
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline text-sm">Privacy Policy</a>
            <a href="#" className="hover:underline text-sm">Accessibility Statement</a>
            <a href="#" className="hover:underline text-sm">Terms & Conditions</a>
            <a href="#" className="hover:underline text-sm">Refund Policy</a>
          </div>

          <div className="flex space-x-4 mt-4">
            {/* Replace src with real icons or use react-icons */}
            <a href="#" className="hover:opacity-75">
              <img src="src/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="src/assets/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="src/assets/linkedin.png" alt="X" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="src/assets/youtube.png" alt="TikTok" className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer