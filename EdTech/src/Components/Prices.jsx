import React from 'react';
import PriceCards from './pricecards';

const pricingData = [
  {
    plan: 'FREE',
    price: 'FREE',
    features: [
      'Introductory courses',
      'Basic resources',
      'Limited support',
      'Sample materials',
    ],
    buttonColor: 'linear-gradient(90deg, #4299e1, #63b3ed)',
  },
  {
    plan: 'Basic',
    price: 'KSH.5,000',
    features: [
      'Core course access',
      'Standard resources',
      'Email support',
      'Course completion certificate',
    ],
    buttonColor: 'linear-gradient(90deg, #4c8be9, #6a9ceb)',
  },
  {
    plan: 'Standard',
    price: 'KSH.10,000',
    features: [
      'Full course access',
      'Advanced resources',
      'Priority support',
      'Personalized feedback',
      'Progress tracking',
    ],
    buttonColor: 'linear-gradient(90deg, #4a6ee1, #6283ee)',
  },
  {
    plan: 'Premium',
    price: 'KSH.15,000',
    features: [
      'Unlimited course access',
      'Exclusive content',
      'One-on-one mentoring',
      'Early access to new features',
      'Personalized learning plans',
    ],
    buttonColor: 'linear-gradient(90deg, #4459d1, #5d6fe5)',
  },
];

const Prices = () => {
  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-blue-600 uppercase font-bold text-sm tracking-wide mb-2">PRICING</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Cost-effective solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EduNova offers flexible and cost-effective pricing models to fit your budget and learning needs. Choose from our options to find the best value for your educational goals and start your journey with ease.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <PriceCards key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;