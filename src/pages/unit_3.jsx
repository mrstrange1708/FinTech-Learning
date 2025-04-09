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
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Module 3: Financial Goals</h1>

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

export default Unit3;