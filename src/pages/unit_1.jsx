import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    "question": "Financial literacy is primarily important because it allows you to:",
    "options": [
      "Maximize spending for immediate pleasures",
      "Accurately manage, grow, and protect financial resources",
      "Completely avoid using banks and financial institutions",
      "Rely on friends and family during financial emergencies"
    ],
    answer: "Accurately manage, grow, and protect financial resources"
  },
  {
    "question": "Which of the following is a key skill gained through financial literacy?",
    "options": [
      "Winning lotteries consistently",
      "Making financial choices based on knowledge and planning",
      "Relying on luck for wealth building",
      "Avoiding all forms of insurance and protection"
    ],
    answer: "Making financial choices based on knowledge and planning"
  },
  {
    "question": "Why is it dangerous to make financial decisions without basic literacy?",
    "options": [
      "You will always pay less tax",
      "You may unknowingly take higher risks and lose money",
      "You will be forced to become an accountant",
      "You will automatically earn a lower salary"
    ],
    answer: "You may unknowingly take higher risks and lose money"
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
    "question": "One common myth about money is that:",
    "options": [
      "Only the rich need to understand money management",
      "Everyone benefits from financial knowledge",
      "Poor financial habits affect all income levels",
      "Smart saving can help anyone regardless of earnings"
    ],
    answer: "Only the rich need to understand money management"
  },
];

const Unit1 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return;
    const newSelectedAnswers = { ...selectedAnswers, [qIndex]: option };
    setSelectedAnswers(newSelectedAnswers);

    if (Object.keys(newSelectedAnswers).length === questions.length) {
      setTimeout(()=>{setShowResult(true);},3000);

    }
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
              {!showResult && (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Unit1;
