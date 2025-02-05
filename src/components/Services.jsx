import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "UX/UI Design", icon: "💬", description: "Crio designs de UI/UX para sites e aplicativos, garantindo uma aparência única e experiência intuitiva." },
    { title: "Desenvolvimento WEB", icon: "<\/>", description: "Desenvolvo sites de alta performance, com código otimizado e carregamento rápido." },
    { title: "Desenvolvimento Mobile", icon: "📱", description: "Crio aplicativos móveis com interfaces atraentes e navegação fluida." },
    { title: "Pesquisas de Usabilidade", icon: "⚡", description: "Realizo testes e pesquisas para garantir que os produtos sejam acessíveis e fáceis de usar." },
    { title: "E-mails Personalizados em HTML", icon: "🎨", description: "Desenvolvo e-mails responsivos, atrativos e interativos para campanhas de marketing e comunicação." },
    { title: "Design Gráfico", icon: "✍️", description: "Crio identidades visuais, logotipos e materiais gráficos impactantes para marcas e negócios." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}  // Começa invisível e com deslocamento
          animate={{ opacity: 1, y: 0 }}   // Fica visível e volta à posição original
          transition={{
            delay: index * 0.4,  // Atraso para aparecer um por um
            duration: 0.5,        // Duração da transição
            ease: "easeOut",      // Tipo de transição
          }}
          className="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg"
        >
          <span className="text-3xl">{service.icon}</span>
          <h3 className="text-xl font-bold mt-2">{service.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
