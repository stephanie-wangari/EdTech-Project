import React from 'react';

const Learn = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Absolute positioned circles - adjust as needed for precise placement */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-70"></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-yellow-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-800 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/3 right-1/5 w-10 h-10 bg-yellow-600 rounded-full opacity-70"></div>


      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Image with abstract shapes */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Abstract background shape (light blue blob) */}
          <div className="absolute bg-blue-200 rounded-full w-[110%] h-[110%] -rotate-6 blur-3xl opacity-70"
               style={{ transform: 'rotate(-6deg) scale(1.05, 1.05)', borderRadius: '60% 40% 40% 60% / 60% 60% 40% 40%' }}>
          </div>
          {/* Stars/Sparkles - adjust positioning and colors */}
          <div className="absolute top-5 left-10 text-yellow-400 text-4xl transform rotate-12">★</div>
          <div className="absolute bottom-10 right-20 text-yellow-300 text-3xl transform -rotate-24">★</div>

          <img
            src="IMAGES/LEARN.png"
            alt="Two students learning together"
            className="relative z-10 w-full max-w-md lg:max-w-none h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Achieve <span className="text-orange-500">Mastery!</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Begin your journey with our expertly designed programs to gain deep
            knowledge and skills. Start now to unlock your potential and reach
            new heights in your field.
          </p>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                number: 1,
                title: 'Sign Up',
                description: 'Easily create your account and get started.',
              },
              {
                number: 2,
                title: 'Pick your path',
                description: 'Select a program tailored to your goals.',
              },
              {
                number: 3,
                title: 'Connect with Mentors',
                description: 'Receive expert guidance and personalized support.',
              },
              {
                number: 4,
                title: 'Earn Certification',
                description: 'Complete the course and earn your certification.',
              },
            ].map((step) => (
              <div key={step.number} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-yellow-400 text-gray-800 font-bold rounded-full flex items-center justify-center text-xl shadow">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <button className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;