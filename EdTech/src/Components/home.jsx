import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-24 bg-white text-gray-800">
     
      <div className="md:w-1/2 p-4 pr-10 flex flex-col justify-center items-start text-left z-10">
        <h1 className="text-4xl md:text-5xl lg:text-3xl font-extrabold leading-tight mb-4">
          Applying cutting-edge techniques for{' '}
          <span className="text-orange-500">transformative</span> learning experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Experience customised education paths and mentorship that foster significant growth and lead to achieving your
          career aspirations.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
          Get Started
        </button>

        <div className="flex flex-wrap mt-12 gap-x-8 gap-y-4">
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl mr-2">📚</span> {/* Example icon */}
            <span className="text-gray-700 font-medium">Quality Education</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl mr-2">💡</span> {/* Example icon */}
            <span className="text-gray-700 font-medium">Custom Learning</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl mr-2">❤️</span> {/* Example icon */}
            <span className="text-gray-700 font-medium">Holistic Guidance</span>
          </div>
        </div>
      </div>

      {/* Right Column: Image with Blob */}
      <div className="md:w-1/2 p-4 flex justify-center items-center relative min-h-[500px] md:min-h-[600px] mt-12 md:mt-0">
    

        <img
          src="IMAGES/HOMEPAGE.png"
          className="relative z-10 w-[70%] max-w-lg h-auto object-contain drop-shadow-lg"
        />

        <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-500 rounded-full z-10"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-blue-500 rounded-full z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;