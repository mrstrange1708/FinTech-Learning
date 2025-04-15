import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "When creating a budget, which step is MOST crucial to ensure long-term success?",
    options: [
      "Recording expenses once at the beginning",
      "Ignoring small daily expenses to save time",
      "Regularly updating and adjusting based on real spending",
      "Planning based only on expected bonuses and gifts"
    ],
    answer: "Regularly updating and adjusting based on real spending"
  },
  {
    question: "A well-maintained emergency fund typically aims to cover:",
    options: [
      "Three to six months of essential living expenses",
      "Luxury vacations and annual shopping sprees",
      "The total cost of your future investments",
      "All non-essential entertainment expenses"
    ],
    answer: "Three to six months of essential living expenses"
  },
  {
    question: "Which of the following BEST explains 'zero-based budgeting'?",
    options: [
      "Spending all income without tracking",
      "Starting from zero and assigning every dollar a specific purpose",
      "Saving nothing and living paycheck to paycheck",
      "Keeping all savings untouched until retirement"
    ],
    answer: "Starting from zero and assigning every dollar a specific purpose"
  },
  {
    question: "If your actual spending exceeds your budget plan regularly, what is the WISEST financial response?",
    options: [
      "Ignore the difference since it will adjust itself",
      "Immediately cut essential needs like food and shelter",
      "Review, revise, and rebalance the budget categories",
      "Apply for instant loans to maintain lifestyle"
    ],
    answer: "Review, revise, and rebalance the budget categories"
  },
  {
    question: "Saving money in an interest-based account (with Riba) is:",
    options: [
      "Financially smart and religiously encouraged",
      "Forbidden (Haram) in Islam despite possible profits",
      "Neutral and allowed if profits are low",
      "Compulsory for every earning Muslim"
    ],
    answer: "Forbidden (Haram) in Islam despite possible profits"
  }
];

const Unit2 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    const newSelectedAnswers = { ...selectedAnswers, [qIndex]: option };
    setSelectedAnswers(newSelectedAnswers);

    if (Object.keys(newSelectedAnswers).length === questions.length) {
      setShowResult(true);
    }
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

      {showResult && (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <div className="bg-gradient-to-br from-green-500 to-green-700 p-14 rounded-3xl shadow-2xl w-full max-w-xl text-center animate-fade-in">
            <h2 className="text-5xl font-extrabold mb-6 text-white">🎉 Unit Completed!</h2>
            <p className="text-2xl text-white mb-6">
              You answered {
                Object.keys(selectedAnswers).filter(qIndex =>
                  questions[qIndex].answer === selectedAnswers[qIndex]
                ).length
              } out of {questions.length} questions correctly!
            </p>
            <Link
              to="/"
              className="inline-block mt-4 bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {!showResult && (
        <div className="flex flex-col md:flex-row">
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
      )}
    </div>
  );
};

export default Unit2;
