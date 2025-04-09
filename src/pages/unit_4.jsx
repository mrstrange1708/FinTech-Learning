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
                <Link to="/" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    ← Back to Home
                </Link>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-center">Module 4: Banking</h1>

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
                      ${userSelected
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

export default Unit4;