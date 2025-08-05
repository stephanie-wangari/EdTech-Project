
import React from 'react';

const CourseCard = ({ imageSrc, category, title, instructor, price, rating, buttonText, buttonColor }) => {
   console.log('Rendering CourseCard:', { title, rating });
    return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-sm mx-auto">
      <div className="h-48 w-full flex items-center justify-center bg-gray-100">
       
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{instructor}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-gray-800">{price}</span>
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm font-bold mr-1">{(rating || 0).toFixed(1)}</span>           
          <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <button
          className={`w-full py-2 px-4 rounded text-white font-semibold ${buttonColor} transition-colors duration-200`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard; 