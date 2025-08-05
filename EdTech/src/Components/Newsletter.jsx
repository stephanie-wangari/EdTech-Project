import React from 'react';

const Newsletter = () => {
  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8 text-center"
      style={{
        background: 'linear-gradient(180deg, #4287F5 0%, #1A4ED4 100%)',
        color: '#fff',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Subscribe To Our Newsletter and Stay Updated
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Stay updated with the latest news, course updates, and exclusive offers delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-900 font-semibold text-white transition-colors duration-300 hover:bg-blue-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;