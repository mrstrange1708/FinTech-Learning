import React, { useState, useEffect } from 'react';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white py-12 px-[15%]">
      <div className="mb-10">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-800 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Module 1: Welcome to Financial Literacy</h1>
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Pagination */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 w-full md:w-1/4 mb-6 md:mb-0 md:mr-8 rounded-2xl shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400 tracking-wide">Questions</h3>
          <div className="grid grid-cols-4 gap-4">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  ${currentQuestionIndex === index ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-white hover:bg-cyan-500'}
                  shadow-md transform hover:scale-110 transition-transform duration-300
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 md:w-1/2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
            </h2>

            <div className="flex flex-col space-y-4">
              {questions[currentQuestionIndex].options.map((option, oIndex) => {
                const userSelected = selectedAnswers[currentQuestionIndex];
                const isCorrect = questions[currentQuestionIndex].answer === option;
                const isUserSelected = userSelected === option;

                const showGreen = userSelected && (isCorrect || (userSelected !== questions[currentQuestionIndex].answer && option === questions[currentQuestionIndex].answer));
                const showRed = userSelected && isUserSelected && !isCorrect;

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleAnswerClick(currentQuestionIndex, option)}
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

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentQuestionIndex === 0}
                className="bg-cyan-600 text-white px-6 py-2 rounded-full disabled:opacity-50"
              >
                Previous
              </button>

              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                disabled={currentQuestionIndex === questions.length - 1}
                className="bg-cyan-600 text-white px-6 py-2 rounded-full disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unit1;
