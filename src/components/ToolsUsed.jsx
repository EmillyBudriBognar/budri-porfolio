import React from 'react';

const ToolsUsed = ({ tools = [] }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Ferramentas Usadas</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <ToolCard 
              key={index}
              name={tool.name}
              icon={tool.icon}
              color={tool.color}
              darkColor={tool.darkColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({ name, icon, color = 'bg-gray-100', darkColor = 'bg-gray-800' }) => {
  return (
    <div className={`${color} dark:${darkColor} p-6 rounded-xl flex flex-col items-center justify-center w-24 h-24 shadow-md hover:shadow-lg transition-shadow`}>
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm font-medium text-center dark:text-gray-200">{name}</p>
    </div>
  );
};

export default ToolsUsed;