import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const modules = [
  { title: 'Module 1: Welcome to Financial Literacy', link: '/quiz/welcome' },
  { title: 'Module 2: Budgeting and Saving', link: '/quiz/budgeting' },
  { title: 'Module 3: Financial Goals', link: '/quiz/goals' },
  { title: 'Module 4: Banking', link: '/quiz/banking' },
  { title: 'Module 5: Taxes', link: '/quiz/taxes' },
];

const Quiz = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='Quiz' className="bg-black min-h-screen py-10 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 capitalize">Choose a Module</h1>

      <div className="space-y-8 max-w-2xl w-full">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold mb-4">{module.title}</h2>
            <Link
              to={module.link}
              className="block w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-cyan-600 transition"
            >
              Start Module
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;