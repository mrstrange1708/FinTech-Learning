import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "Welcome to Financial Literacy: What does financial literacy help you understand?",
    options: [
      "How to manage and grow money",
      "How to cook meals",
      "How to design websites",
      "How to repair cars"
    ],
    answer: "How to manage and grow money"
  },
  {
    question: "Welcome to Financial Literacy: Why is financial literacy important?",
    options: [
      "Improves physical fitness",
      "Increases social media following",
      "Cures illnesses",
      "Helps make informed money decisions"
    ],
    answer: "Helps make informed money decisions"
  },
  {
    question: "Welcome to Financial Literacy: What is a budget?",
    options: [
      "A loan from friends",
      "A type of bank account",
      "A plan for managing income and expenses",
      "A summary of investments"
    ],
    answer: "A plan for managing income and expenses"
  },
  {
    question: "Welcome to Financial Literacy: Which of these is a basic financial principle?",
    options: [
      "Invest in unverified schemes",
      "Borrow unlimited money",
      "Spend less than you earn",
      "Ignore your expenses"
    ],
    answer: "Spend less than you earn"
  },
  {
    question: "Welcome to Financial Literacy: Which statement best describes saving money?",
    options: [
      "Setting aside a portion of income for future use",
      "Investing in high-risk ventures",
      "Spending all money immediately",
      "Borrowing money from friends"
    ],
    answer: "Setting aside a portion of income for future use"
  },
  {
    question: "Welcome to Financial Literacy: What is the purpose of learning financial literacy?",
    options: [
      "To become a lawyer",
      "To always avoid taxes",
      "To travel without planning",
      "To make better financial decisions"
    ],
    answer: "To make better financial decisions"
  },
  {
    question: "Welcome to Financial Literacy: What does a financial goal usually involve?",
    options: [
      "Spending money impulsively",
      "Planning for a future purchase or investment",
      "Ignoring financial planning",
      "Accumulating debt"
    ],
    answer: "Planning for a future purchase or investment"
  },
  {
    question: "Welcome to Financial Literacy: How can understanding interest rates benefit you?",
    options: [
      "Improves athletic performance",
      "Builds better relationships",
      "Helps in making wise borrowing choices",
      "Helps in designing a website"
    ],
    answer: "Helps in making wise borrowing choices"
  },
  {
    question: "Welcome to Financial Literacy: What does being financially literate empower you to do?",
    options: [
      "Manage money effectively",
      "Increase loan amounts without planning",
      "Avoid all taxes",
      "Guess stock prices randomly"
    ],
    answer: "Manage money effectively"
  },
  {
    question: "Welcome to Financial Literacy: What is a practical first step in learning about money management?",
    options: [
      "Ignoring your bills",
      "Investing in unfamiliar markets",
      "Tracking your daily expenses",
      "Taking large loans"
    ],
    answer: "Tracking your daily expenses"
  }
];

const Unit1 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-12 px-6 md:px-20">
      <div className="mb-10">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-800 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Module 1: Welcome to Financial Literacy</h1>
      
      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">{qIndex + 1}. {q.question}</h2>

            <div className="flex flex-col space-y-4">
              {q.options.map((option, oIndex) => {
                const userSelected = selectedAnswers[qIndex];
                const isCorrect = q.answer === option;
                const isUserSelected = userSelected === option;

                const showGreen = userSelected && (isCorrect || userSelected !== q.answer && option === q.answer);
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

export default Unit1;
