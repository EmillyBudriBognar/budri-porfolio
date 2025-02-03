import React from "react";
import Logo from "../assets/img/logo/white-and-purple.svg"; 
import Image from "next/image";
import Services from "@/components/Services";

const ServicesSection = () => {
  return (
    <section id="ServicesSection" className="bg-gray-900 w-full text-white py-16 px-6 md:px-12">
      <div className="mx-auto text-center">
        {/* Logo e Título */}
        <div className="mb-8">
          <div className="flex justify-center items-center">
                <Image
                    src={Logo}
                    alt="Logo Budri"
                    className="w-40 mb-6"
                />
        </div>
        <h2 className="text-2xl font-bold mt-4">
                A Budri não apenas cria designs, aqui nós criamos{" "}
                <br className="mb-8" />
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-5xl leading-relaxed">
                    EXPERIÊNCIAS
                </span>
        </h2>
        </div>

        {/* Linha decorativa */}
        <div className="w-16 h-1 bg-white mx-auto my-6 mb-10"></div>

        {/* Subtítulo */}
        <p className="text-xl mb-4 font-bold">
          Serviços <span className="text-purple-400">oferecidos</span>.
        </p>

        {/* Cards */}
        <Services></Services>

        {/* Link final */}
        <p className="mt-6 mb-10 text-lg font-bold">
          Sinta-se à vontade para dar uma olhada nos{" "}
          <span className="text-purple-400">
            principais projetos
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
