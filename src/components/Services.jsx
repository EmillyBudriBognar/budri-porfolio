"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ButtonWhite"; 

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "UX/UI Design", 
      icon: "💬", 
      description: "Crio designs de UI/UX para sites e aplicativos, garantindo uma aparência única e experiência intuitiva.",
      methodology: "Minha abordagem envolve pesquisa de usuários, wireframes, prototipagem e testes para criar interfaces intuitivas."
    },
    { 
      title: "Desenvolvimento Front-End WEB", 
      icon: "<\/>", 
      description: "Desenvolvo sites de alta performance, com código otimizado e carregamento rápido.",
      methodology: "Utilizo tecnologias modernas como React, Next.js e otimizações para garantir alta performance e SEO."
    },
    { 
      title: "Desenvolvimento Front-End Mobile", 
      icon: "📱", 
      description: "Crio aplicativos móveis com interfaces atraentes e navegação fluida.",
      methodology: "Uso frameworks como React Native para criar aplicativos eficientes e responsivos em diversas plataformas."
    },
    { 
      title: "Pesquisas de Usabilidade", 
      icon: "⚡", 
      description: "Realizo testes e pesquisas para garantir que os produtos sejam acessíveis e fáceis de usar.",
      methodology: "Faço testes A/B, entrevistas e análise heurística para melhorar a experiência do usuário."
    },
    { 
      title: "E-mails Personalizados em HTML", 
      icon: "🎨", 
      description: "Desenvolvo e-mails responsivos, atrativos e interativos para campanhas de marketing e comunicação.",
      methodology: "Criação de templates HTML otimizados para diversos clientes de e-mail, garantindo compatibilidade e alta taxa de abertura."
    },
    { 
      title: "Design Gráfico", 
      icon: "✍️", 
      description: "Crio identidades visuais, logotipos e materiais gráficos impactantes para marcas e negócios.",
      methodology: "Uso uma abordagem centrada na marca, combinando tipografia, cores e elementos visuais estratégicos."
    },
  ];

  // Travar a rolagem quando o modal estiver aberto
  useEffect(() => {
    if (selectedService) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedService]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}  
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          className="p-6 h-auto bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg shadow-md text-white text-center"
        >
          <span className="text-3xl">{service.icon}</span>
          <h3 className="font-semibold text-lg my-2">{service.title}</h3>
          <p className="text-sm">{service.description}</p>
          <Button onClick={() => setSelectedService(service)} className="mt-4">
            como funciona
          </Button>
        </motion.div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="bg-white rounded-lg p-6 w-[90%] md:w-[40%] text-center shadow-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-2 right-3 text-gray-500 text-xl hover:text-gray-700"
                onClick={() => setSelectedService(null)}
              >
                ✖
              </button>
              <h2 className="text-xl font-bold text-purple-700">{selectedService.title}</h2>
              <p className="text-gray-600 mt-3">{selectedService.methodology}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
