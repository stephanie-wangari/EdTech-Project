import React from 'react';

const PriceCards = ({ plan, price, features, buttonColor }) => {
  const cardBorderColor = plan === 'FREE' ? 'border-blue-400' : 'border-blue-300';

  return (
    <div className={`bg-white p-8 rounded-3xl shadow-xl border-2 ${cardBorderColor} flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan}</h3>
      <p className="text-4xl font-extrabold text-blue-600 mb-6">{price}</p>
      
      <ul className="text-left text-gray-600 space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        className="w-full py-3 px-8 text-white font-bold rounded-lg shadow-md"
        style={{ background: buttonColor }}
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCards;