import React from 'react';

const CreativeProcess = ({ 
  steps = [],
  bgColor = 'bg-gray-50',
  darkBgColor = 'bg-gray-800',
  cardColors = ['bg-purple-100', 'bg-pink-100', 'bg-blue-100', 'bg-indigo-100', 'bg-teal-100'],
  darkCardColors = ['bg-purple-900', 'bg-pink-900', 'bg-blue-900', 'bg-indigo-900', 'bg-teal-900']
}) => {
  return (
    <section className={`${bgColor} dark:${darkBgColor} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Processo Criativo</h2>
        
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              step={step}
              bgColor={cardColors[index % cardColors.length]}
              darkBgColor={darkCardColors[index % darkCardColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, bgColor, darkBgColor }) => {
  return (
    <div className={`p-6 rounded-xl ${bgColor} dark:${darkBgColor} text-center transition-transform hover:scale-105`}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-2xl">
        {step.emoji}
      </div>
      <h3 className="font-semibold mb-2 dark:text-white">{step.title}</h3>
      <p className="text-sm opacity-80 dark:text-gray-300">{step.description}</p>
    </div>
  );
};

export default CreativeProcess;