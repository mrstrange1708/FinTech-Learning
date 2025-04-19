import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: "Taxes: What is the primary difference between progressive and regressive tax systems?",
    options: [
      "Progressive taxes take a higher percentage of income from lower earners, while regressive taxes are the same for all",
      "Progressive taxes increase with income, while regressive taxes decrease with income",
      "Progressive taxes are only applied to businesses, while regressive taxes are applied to individuals",
      "Regressive taxes are only applied to luxury goods, while progressive taxes are applied to necessities"
    ],
    answer: "Progressive taxes increase with income, while regressive taxes decrease with income"
  },
  {
    question: "Taxes: What is a tax credit and how does it differ from a tax deduction?",
    options: [
      "A tax credit directly reduces your tax bill, while a deduction reduces your taxable income",
      "A tax credit is a form of government assistance, while a tax deduction is a personal loan",
      "A tax credit increases your taxable income, while a tax deduction reduces it",
      "A tax credit is only available to businesses, while tax deductions are only for individuals"
    ],
    answer: "A tax credit directly reduces your tax bill, while a deduction reduces your taxable income"
  },
  {
    question: "Taxes: Which of the following expenses is eligible for tax deferral under a retirement account?",
    options: [
      "Purchases of luxury goods",
      "Contributions to a Roth IRA",
      "Contributions to a 401(k) plan",
      "Medical expenses that exceed a certain threshold"
    ],
    answer: "Contributions to a 401(k) plan"
  },
  {
    question: "Taxes: If a person has a capital gain on the sale of a house that was their primary residence, what is the tax-exempt amount they may be eligible for under the IRS rules?",
    options: [
      "$50,000 for single filers, $100,000 for joint filers",
      "$250,000 for single filers, $500,000 for joint filers",
      "$500,000 for single filers, $1,000,000 for joint filers",
      "$100,000 for both single and joint filers"
    ],
    answer: "$250,000 for single filers, $500,000 for joint filers"
  },
  {
    question: "Taxes: What is the significance of the standard deduction in personal income tax calculations?",
    options: [
      "It is a fixed amount that reduces taxable income regardless of the number of dependents",
      "It is applied only to income earned from investments",
      "It is a credit that directly reduces the amount of tax owed",
      "It applies to corporations and not individuals"
    ],
    answer: "It is a fixed amount that reduces taxable income regardless of the number of dependents"
  }
];

const Unit5 = () => {
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
      setTimeout(()=>{setShowResult(true);},3000);

    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-12 px-6 md:px-[15%]">
      <div className="mb-10">
        <Link to="/" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Module 5: Taxes</h1>

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

export default Unit5;