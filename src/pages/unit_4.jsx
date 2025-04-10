import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
    {
        question: "Banking: What is the primary function of a bank?",
        options: [
            "Offering entertainment",
            "Selling products online",
            "Providing travel services",
            "Safekeeping money and facilitating transactions"
        ],
        answer: "Safekeeping money and facilitating transactions"
    },
    {
        question: "Banking: What is a checking account used for?",
        options: [
            "Storing non-liquid assets",
            "Long-term investment",
            "Collecting interest without using money",
            "Daily transactions and bill payments"
        ],
        answer: "Daily transactions and bill payments"
    },
    {
        question: "Banking: What benefit does a savings account offer?",
        options: [
            "Offers high risk returns",
            "Earns interest on your deposits",
            "Provides loans automatically",
            "Allows unlimited withdrawals without fees"
        ],
        answer: "Earns interest on your deposits"
    },
    {
        question: "Banking: What does 'overdraft' mean?",
        options: [
            "Spending more money than available in your account",
            "A bonus provided by the bank",
            "Depositing more than your paycheck",
            "Receiving extra money from the bank"
        ],
        answer: "Spending more money than available in your account"
    },
    {
        question: "Banking: What is an ATM?",
        options: [
            "Automated ticket machine",
            "Algorithmic trading machine",
            "Automated teller machine for cash withdrawals",
            "Automobile maintenance system"
        ],
        answer: "Automated teller machine for cash withdrawals"
    }
];

const Unit4 = () => {
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
                <Link to="/" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    ← Back to Home
                </Link>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-center">Module 4: Banking</h1>

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

export default Unit4;