import React from 'react';

const ProjectOverview = ({ 
  objective, 
  challenge, 
  solution,
  backgroundColor = 'bg-white',
  darkBackgroundColor = 'bg-gray-900',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100'
}) => {
  return (
    <section className={`${backgroundColor} dark:${darkBackgroundColor} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Sobre o Projeto</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <OverviewCard 
            emoji="🎯"
            title="Objetivo"
            content={objective}
            textColor={textColor}
            darkTextColor={darkTextColor}
          />
          <OverviewCard 
            emoji="🧩"
            title="Desafio"
            content={challenge}
            textColor={textColor}
            darkTextColor={darkTextColor}
          />
          <OverviewCard 
            emoji="💡"
            title="Solução"
            content={solution}
            textColor={textColor}
            darkTextColor={darkTextColor}
          />
        </div>
      </div>
    </section>
  );
};

const OverviewCard = ({ emoji, title, content, textColor, darkTextColor }) => {
  return (
    <div className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${textColor} dark:${darkTextColor} bg-white dark:bg-gray-800`}>
      <span className="text-4xl mb-4 block">{emoji}</span>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="opacity-90">{content}</p>
    </div>
  );
};

export default ProjectOverview;