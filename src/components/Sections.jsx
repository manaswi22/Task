import React from 'react';

const steps = [
  {
    title: 'Select Your Role and Sign Up',
    description: 'Buyers post their needs and review top suppliers.',
    icon: '👤',
  },
  {
    title: 'Buyers Post Your Requirements',
    description: 'While suppliers complete profiles, connect with potential buyers.',
    icon: '📝',
  },
  {
    title: 'Review, Select, and Contact the Best Suppliers',
    description: 'Build successful business relationships, sharing valuable feedback.',
    icon: '🔍',
  },
  {
    title: 'Suppliers Complete your profile and get notified for opportunities',
    description: 'Contact to Buyers and share your quote for the service.',
    icon: '📋',
  },
  {
    title: 'Contact to Buyers and Share your Quote for the service',
    description: 'Both the parties can connect and make business.',
    icon: '✉️',
  },
  {
    title: 'Both the Parties can Connect and Make Business Leave a Feedback',
    description: 'Both the parties can leave valuable feedback.',
    icon: '🤝',
  },
];

const Sections = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">How it works?</h2>
        <p className="mb-8 text-lg text-gray-500 text-center">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white text-3xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections;
