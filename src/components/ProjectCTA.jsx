import React from 'react';

const ProjectCTA = ({ 
  title = "Curtiu esse projeto?", 
  subtitle = "Vamos conversar sobre como posso ajudar sua marca também.", 
  buttonText = "ENTRE EM CONTATO",
  gradientFrom = 'from-purple-400',
  gradientTo = 'to-pink-500',
  darkGradientFrom = 'from-purple-600',
  darkGradientTo = 'to-pink-700'
}) => {
  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} dark:${darkGradientFrom} dark:${darkGradientTo} py-20 px-4`}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{subtitle}</p>
        <button className="bg-white text-purple-600 dark:text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ProjectCTA;