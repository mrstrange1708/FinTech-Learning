import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "What is the PRIMARY reason why a 'zero-based budget' is more effective than the '50/30/20' rule for long-term savings?",
    options: [
      "It limits flexibility to spend on non-essential categories",
      "It forces you to assign every dollar a purpose, leaving no room for waste",
      "It automatically adjusts for inflation and unexpected expenses",
      "It is easier to follow and requires less time to manage"
    ],
    answer: "It forces you to assign every dollar a purpose, leaving no room for waste"
  },
  {
    question: "Which of the following is the most problematic consequence of ignoring the *emergency fund* concept in your budget?",
    options: [
      "You will struggle to account for your discretionary spending",
      "You will be unable to meet unexpected expenses without going into high-interest debt",
      "You will miss opportunities to invest in high-risk ventures",
      "You will only be able to save for short-term goals"
    ],
    answer: "You will be unable to meet unexpected expenses without going into high-interest debt"
  },
  {
    question: "In a scenario where you have a fixed monthly income but irregular, unexpected expenses, which budgeting method would be most beneficial?",
    options: [
      "Envelopes method, categorizing spending beforehand",
      "Pay yourself first method, consistently saving a fixed percentage",
      "Zero-based budgeting, reassigning unused funds every month",
      "80/20 rule, where 80% goes to needs and 20% goes to wants"
    ],
    answer: "Zero-based budgeting, reassigning unused funds every month"
  },
  {
    question: "If you are consistently overspending on ‘wants’ in your budget, what is the underlying issue most likely to be?",
    options: [
      "Underestimating monthly discretionary income",
      "Misclassifying needs as wants",
      "Overestimating long-term savings potential",
      "Ignoring fixed expenses such as rent or utilities"
    ],
    answer: "Misclassifying needs as wants"
  },
  {
    question: "What is the financial risk of not accounting for inflation in a long-term savings plan?",
    options: [
      "Potential reduction in purchasing power, leading to unmet financial goals",
      "Increased ability to invest in high-risk ventures",
      "More money saved in the long run, due to consistent interest rates",
      "A higher chance of achieving desired retirement age"
    ],
    answer: "Potential reduction in purchasing power, leading to unmet financial goals"
  }
];

const Unit3 = () => {
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
      )}
    </div>
  );
};

export default Unit3;