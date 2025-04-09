import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LearnAndGrow = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src="src/assets/Main_img.png"
            alt="Learning"
            className="rounded-xl w-full"
          />
        </div>
        
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn and Grow</h1>
          <p className="text-lg leading-relaxed mb-8">
            Unlock your true potential with the right skills and mindset. Begin your journey today.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Explore More
          </a>
        </div>

      </div>
    </section>
  );
};

export default LearnAndGrow;
