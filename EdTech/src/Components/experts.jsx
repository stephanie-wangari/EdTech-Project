import React from 'react';
const Experts = () => {

const mentorImages = {
  mentor1: '/IMAGES/pic1.png', 
  mentor2: '/IMAGES/pic2.png',
  mentor3: '/IMAGES/pic3.png',
  mentor4: '/IMAGES/pic4.png',
};

  return (
    <div className="bg-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="relative w-full lg:w-1/2 grid grid-cols-2 gap-6 p-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-100 transform -rotate-6"
                 style={{ borderRadius: '60% 40% 40% 60% / 60% 60% 40% 40%' }}></div>
            <img
              src={mentorImages.mentor1}
              alt="Mentor with hijab"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 transform rotate-12"
                 style={{ borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' }}></div>
            <img
              src={mentorImages.mentor2}
              alt="Male mentor smiling"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-200 transform rotate-6"
                 style={{ borderRadius: '40% 60% 60% 40% / 60% 60% 40% 40%' }}></div>
            <img
              src={mentorImages.mentor3}
              alt="Male mentor in a blue tie"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Bottom-right mentor */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full bg-orange-100 transform -rotate-12"
                 style={{ borderRadius: '60% 40% 40% 60% / 40% 40% 60% 60%' }}></div>
            <img
              src={mentorImages.mentor4}
              alt="Female mentor with brown hair"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-blue-700 uppercase font-semibold text-sm mb-2 tracking-wide">MEET YOUR MENTORS</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Expert Guidance
            <span className="text-2xl ml-2 inline-block -rotate-12">
              <span role="img" aria-label="pen emoji">
                📝
              </span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Our mentors are seasoned industry experts dedicated to guiding you with personalized support and real-world insights. With their expertise by your side, you'll have the confidence and knowledge to achieve your learning goals and excel in your chosen field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experts;