import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "Financial Goals: What is a financial goal?",
    options: [
      "A target related to saving or spending money",
      "A plan only for leisure activities",
      "A requirement for getting a loan",
      "An unpredictable wish"
    ],
    answer: "A target related to saving or spending money"
  },
  {
    question: "Financial Goals: Why is it important to set financial goals?",
    options: [
      "Limits spending only on luxuries",
      "Decreases financial planning",
      "Creates more confusion",
      "Provides direction and motivation for money management"
    ],
    answer: "Provides direction and motivation for money management"
  },
  {
    question: "Financial Goals: What is the first step in setting a financial goal?",
    options: [
      "Spending freely",
      "Ignoring expenses",
      "Borrowing money",
      "Identifying what you want to achieve"
    ],
    answer: "Identifying what you want to achieve"
  },
  {
    question: "Financial Goals: Which is an example of a short-term financial goal?",
    options: [
      "Long-term investment planning",
      "Saving for a new phone in a few months",
      "Retirement planning over decades",
      "Paying off a mortgage over 20 years"
    ],
    answer: "Saving for a new phone in a few months"
  },
  {
    question: "Financial Goals: How can breaking down a goal help financially?",
    options: [
      "Increases complexity",
      "Eliminates the need for a plan",
      "Makes the goal more manageable",
      "Discourages saving"
    ],
    answer: "Makes the goal more manageable"
  }
];

const Unit3 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  return (
    <div className="bg-black min-h-screen text-white p-12 px-6 md:px-[15%]">
      <div className="mb-10">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Module 3: Financial Goals</h1>

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

        {/* Main Question Area */}
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

            {/* Navigation Buttons */}
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

export default Unit3;