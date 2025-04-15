import React from 'react';

const ProjectHero = ({ 
  title, 
  subtitle, 
  image, 
  gradientFrom = 'from-purple-400', 
  gradientTo = 'to-pink-500',
  darkGradientFrom = 'from-purple-600',
  darkGradientTo = 'to-pink-700'
}) => {
  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} dark:${darkGradientFrom} dark:${darkGradientTo} py-20 md:py-32 px-4`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">{subtitle}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {image && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;