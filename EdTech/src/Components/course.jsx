
import React from 'react';

import CourseCard from './coursecards'; 

const Course = () => {
  
const coursesData = [
  {
    id: 1,
    imageSrc: "/IMAGES/cloudcomputing.png", 
    category: 'Cloud Computing Course',
    title: 'Mastering core cloud computing fu...',
    instructor: 'Kinsi Ali',
    price: 'Free',
    rating: 5.0,
    buttonText: 'Development',
    buttonColor: 'bg-red-400 hover:bg-red-500',
  },
  {
    id: 2,
    imageSrc: "/IMAGES/cloudcomp2.png", // Path to image in public/IMAGES
    category: 'Programming Course',
    title: 'Swift programming for iOS develop...',
    instructor: 'Kinsi Ali',
    price: 'KES.2500',
    rating: 4.0,
    buttonText: 'Development',
    buttonColor: 'bg-orange-400 hover:bg-orange-500',
  },
  {
    id: 3,
    imageSrc: "/IMAGES/iOS dvpt.png", // Path to image in public/IMAGES
    category: 'Cloud Computing Course',
    title: 'Mastering core cloud computing fu...',
    instructor: 'Kinsi Ali',
    price: 'KES.3200',
    rating: 5.0,
    buttonText: 'Development',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
];

 // Assuming this component is named CoursesSection
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <p className="text-blue-700 uppercase font-semibold text-sm mb-2 tracking-wide">COURSES</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Dive into Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore Engaging Lessons, Tailored Programs, and Hands-on
            Learning Experiences that Empower You to Unlock Your Full
            Potential and Achieve Success in Your Educational Journey.
          </p>
        </div>

        {/* Course Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;