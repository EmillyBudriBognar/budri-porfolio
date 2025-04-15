import React from 'react';

const ResultsImpact = ({ 
  metrics = [], 
  feedback, 
  beforeAfterImages,
  bgColor = 'bg-white',
  darkBgColor = 'bg-gray-900'
}) => {
  return (
    <section className={`${bgColor} dark:${darkBgColor} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Resultados & Impacto</h2>
        
        {metrics.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <MetricCard 
                key={index}
                value={metric.value}
                description={metric.description}
                icon={metric.icon}
              />
            ))}
          </div>
        )}
        
        {feedback && (
          <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 mb-16">
            <blockquote className="text-xl italic text-center dark:text-indigo-100">
              "{feedback}"
            </blockquote>
          </div>
        )}
        
        {beforeAfterImages && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Antes</h3>
              <img 
                src={beforeAfterImages.before} 
                alt="Antes" 
                className="rounded-xl shadow-md w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Depois</h3>
              <img 
                src={beforeAfterImages.after} 
                alt="Depois" 
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const MetricCard = ({ value, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
      <div className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">
        {value}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="text-2xl">{icon}</div>
    </div>
  );
};

export default ResultsImpact;