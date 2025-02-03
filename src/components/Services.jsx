export default function Services() {
    const services = [
      { title: "Web Design", icon: "💬", description: "I do UI/UX design for the website that helps website to get a unique look." },
      { title: "Web Dev", icon: "<\/>", description: "I also develop the websites. I create high performance website with blazing fast speed." },
      { title: "App Dev", icon: "📱", description: "I develop mobile applications. I create mobile apps with eye-catching UI." },
      { title: "SEO Optimization", icon: "⚡", description: "I optimize websites to rank higher in search engines and gain more visibility." },
      { title: "Graphic Design", icon: "🎨", description: "I create stunning graphics, logos, and branding materials for businesses." },
      { title: "Content Writing", icon: "✍️", description: "I craft compelling content for websites, blogs, and marketing campaigns." },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-900 text-white">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg">
            <span className="text-3xl">{service.icon}</span>
            <h3 className="text-xl font-bold mt-2">{service.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{service.description}</p>
          </div>
        ))}
      </div>
    );
  }
  