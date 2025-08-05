import React from 'react';

const WelcomeSection = () => {
  const steps = [
    { title: 'Provide your details', description: 'Please provide your personal details', active: true },
    { title: 'Select your learning path', description: 'Please select your preferred learning path', active: false },
    { title: 'Confirm payment information', description: 'Please confirm your payment details', active: false },
    { title: 'Account successfully created', description: "You're free to start your journey!", active: false },
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Left Section - Progress Steps */}
        <div className="lg:w-1/3 p-12 lg:p-16 flex flex-col justify-between"
             style={{ background: '#f0f4ff' }}>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${step.active ? 'bg-blue-600 text-white' : 'border-2 border-gray-400 text-gray-400'}`}>
                  {step.active ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Copyright notice at the bottom of the left column */}
          <p className="text-sm text-gray-500 mt-12 lg:mt-0">© 2024</p>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-2/3 p-8 sm:p-12">
          <div className="flex justify-end">
            {/* These are the colored circles at the top left */}
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome 👋
          </h2>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Personal details
          </h1>
          <p className="text-md text-gray-600 mb-8">
            Please provide your personal details
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name*</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name*</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 font-semibold text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue
            </button>
          </form>
          
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;