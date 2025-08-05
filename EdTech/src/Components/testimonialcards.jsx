import React from 'react';

const TestimonialCard = ({ imageSrc, name, title, quote }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-cyan-400 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center max-w-sm mx-auto">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-yellow-400">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">
        "{quote}"
      </p>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-2 w-full mt-auto">
        <div className="text-left">
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <span className="text-cyan-400 text-4xl ml-auto font-black leading-none">”</span>
      </div>
    </div>
  );
};

export default TestimonialCard;