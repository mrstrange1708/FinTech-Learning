import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "Taxes: What are taxes used for?",
    options: [
      "Saving money for banks",
      "Funding public services and infrastructure",
      "Buying personal luxury items",
      "Providing free cash to citizens"
    ],
    answer: "Funding public services and infrastructure"
  },
  {
    question: "Taxes: Who is required to pay taxes?",
    options: [
      "Individuals and businesses earning income",
      "Everyone regardless of income, without exception",
      "Only government employees",
      "Only large corporations"
    ],
    answer: "Individuals and businesses earning income"
  },
  {
    question: "Taxes: What is income tax?",
    options: [
      "A tax on earnings from work or investments",
      "A tax on spending in stores",
      "A charge for opening a bank account",
      "A fee for using public transportation"
    ],
    answer: "A tax on earnings from work or investments"
  },
  {
    question: "Taxes: Which is an example of a deductible expense?",
    options: [
      "Luxury vacation spending",
      "Daily coffee expenses",
      "Charitable donations",
      "Non-essential shopping"
    ],
    answer: "Charitable donations"
  },
  {
    question: "Taxes: What is sales tax?",
    options: [
      "An interest rate applied to savings",
      "A fee deducted from your bank account monthly",
      "A percentage added to the price of goods at purchase",
      "A charge for withdrawing money from ATMs"
    ],
    answer: "A percentage added to the price of goods at purchase"
  }
];

const Unit5 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  return (
    <div className="bg-black min-h-screen text-white p-12 px-6 md:px-20">
      <div className="mb-10">
        <Link to="/" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Module 5: Taxes</h1>

      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">{qIndex + 1}. {q.question}</h2>
            <div className="flex flex-col space-y-4">
              {q.options.map((option, oIndex) => {
                const userSelected = selectedAnswers[qIndex];
                const isCorrect = q.answer === option;
                const isUserSelected = userSelected === option;
                const showGreen = userSelected && (isCorrect || (userSelected !== q.answer && option === q.answer));
                const showRed = userSelected && isUserSelected && !isCorrect;

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleAnswerClick(qIndex, option)}
                    className={`
                      px-6 py-3 rounded-lg border text-left
                      ${
                        userSelected
                          ? showGreen
                            ? 'bg-green-500 border-green-700'
                            : showRed
                            ? 'bg-red-500 border-red-700'
                            : 'bg-gray-700'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }
                      transition
                    `}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unit5;