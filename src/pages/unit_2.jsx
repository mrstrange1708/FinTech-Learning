import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "Budgeting and Saving: What is a common benefit of creating a budget?",
    options: [
      "Confuses financial goals",
      "Helps track income and expenses",
      "Increases debt automatically",
      "Guarantees immediate wealth"
    ],
    answer: "Helps track income and expenses"
  },
  {
    question: "Budgeting and Saving: Why should you save money regularly?",
    options: [
      "To prepare for emergencies and future needs",
      "To spend more on luxuries immediately",
      "To invest in illegal schemes",
      "To avoid earning income"
    ],
    answer: "To prepare for emergencies and future needs"
  },
  {
    question: "Budgeting and Saving: Which tool is useful for budgeting?",
    options: [
      "A cooking recipe book",
      "A financial planning app or spreadsheet",
      "A sports calendar",
      "A music playlist"
    ],
    answer: "A financial planning app or spreadsheet"
  },
  {
    question: "Budgeting and Saving: What does an emergency fund provide?",
    options: [
      "Extra money for fancy items",
      "Financial security during unforeseen expenses",
      "An excuse to spend recklessly",
      "A method to earn interest quickly"
    ],
    answer: "Financial security during unforeseen expenses"
  },
  {
    question: "Budgeting and Saving: How can tracking expenses help save money?",
    options: [
      "Eliminates the need for a budget",
      "Boosts unnecessary spending",
      "Increases monthly bills",
      "Identifies areas to cut costs"
    ],
    answer: "Identifies areas to cut costs"
  }
];

const Unit2 = () => {
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

      <h1 className="text-4xl font-bold mb-8 text-center">Module 2: Budgeting and Saving</h1>

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

export default Unit2;
