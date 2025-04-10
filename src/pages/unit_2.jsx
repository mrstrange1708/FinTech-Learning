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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  return (
    <div className="bg-black min-h-screen text-white py-12 px-[15%]">
      <div className="mb-10">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Module 2: Budgeting and Saving</h1>

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

export default Unit2;
