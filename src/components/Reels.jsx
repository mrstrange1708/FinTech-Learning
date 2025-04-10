import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPlay } from 'react-icons/fa';

const Reels = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reels = [
    "https://www.youtube.com/embed/7E2WU6_Kfbc",
    "https://www.youtube.com/embed/YK4M37N6FJc",
    "https://www.youtube.com/embed/GHtXuMqr8BU",
    "https://www.youtube.com/embed/YFPguWpM_yM",
    "https://www.youtube.com/embed/0GxSnWSp3VM",
    "https://www.youtube.com/embed/BwkCblsYE8E",
  ];

  return (
    <div id="Reels" className="flex flex-col items-center justify-center min-h-screen bg-black pt-20">
      <h1 className="text-3xl font-bold mb-8 text-white flex items-center space-x-3">
        <span>Videos</span>
        <FaPlay className="text-red-500 text-xl" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {reels.map((url, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col transform transition-smooth duration-500 ease-out hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in-up"
          >
            <div className="relative w-full h-64">
              <iframe
                src={url}
                title={`Reel ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 flex flex-col items-center">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
