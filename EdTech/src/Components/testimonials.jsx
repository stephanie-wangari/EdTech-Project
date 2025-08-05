import React from 'react';
import TestimonialCard from './testimonialcards'; // Adjust path if needed


const Testimonials = () => {
  
const testimonialsData = [
  {
    id: 1,
    imageSrc: '/IMAGES/sarah.png', // Replace with actual path
    name: 'Sarah L.',
    title: 'Data Analyst',
    quote: 'EduNova revolutionized my learning experience with its innovative approach. The interactive courses, combined with expert instructors, provided me with practical skills that I could immediately apply in my career.',
  },
  {
    id: 2,
    imageSrc: '/IMAGES/john.png', // Replace with actual path
    name: 'John M.',
    title: 'Software Engineer',
    quote: 'I was amazed by how engaging EduNova’s is. The flexibility to learn at my own pace, coupled with the support from mentors, helped me excel. The platform’s interactive content transformed my learning journey.',
  },
  {
    id: 3,
    imageSrc: '/IMAGES/michael.png', // Replace with actual path
    name: 'Michael T.',
    title: 'Marketing Specialist',
    quote: 'Joining EduNova was the best decision I made for my growth. The courses are meticulously structured and the community support is exceptional. The interactive elements and guidance helped me gain skills that have opened new opportunities.',
  },
];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Read <span className="text-blue-600">Testimonials</span> from Our
            <br />
            Community of Learners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our community of learners has shared their experiences and successes with us,
            providing valuable insights into the impact of our courses. Read their testimonials
            to see how our programs have helped them grow and achieve their goals.
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;