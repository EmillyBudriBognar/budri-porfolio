"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

// Components
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import CreativeProcess from '@/components/CreativeProcess';
import ResultsImpact from '@/components/ResultsImpact';
import GalleryCarousel from '@/components/GalleryCarousel';
import ToolsUsed from '@/components/ToolsUsed';
import LessonsLearned from '@/components/LessonsLearned';
import ProjectCTA from '@/components/ProjectCTA';
import ProjectsNav from '@/components/ProjectsNav';

// Assets
import MeuAumigoLogoDark from "@/assets/img/project-meuaumigo/logoworkingbrain-white.svg";
import MeuAumigoLogoLight from "@/assets/img/project-meuaumigo/logoworkingbrain-black.svg";

import Slide1PT from "@/assets/img/project-meuaumigo/slide1-pt.svg";
import Slide2PT from "@/assets/img/project-meuaumigo/slide2-pt.svg";
import Slide3PT from "@/assets/img/project-meuaumigo/slide3-pt.svg";

import Slide1EN from "@/assets/img/project-meuaumigo/slide1-en.svg";
import Slide2EN from "@/assets/img/project-meuaumigo/slide2-en.svg";
import Slide3EN from "@/assets/img/project-meuaumigo/slide3-en.svg";

import Slide1ES from "@/assets/img/project-meuaumigo/slide1-es.svg";
import Slide2ES from "@/assets/img/project-meuaumigo/slide2-es.svg";
import Slide3ES from "@/assets/img/project-meuaumigo/slide3-es.svg";

const ProjectPage = ({ language = 'pt' }) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const translations = {
    pt: {
      title: "E-mail HTML Meu Aumigo",
      subtitle: "Design interativo e responsivo para campanha Pet Friday",
      overview: {
        objective: "Criar um e-mail visualmente atrativo que acompanha pedidos e promove a Pet Friday, incentivando novas compras.",
        challenge: "Alinhar identidade visual, clareza e interatividade em um layout acessível para todos os dispositivos.",
        solution: "Desenvolvimento de um e-mail responsivo com elementos visuais envolventes e CTA estratégicos."
      },
      process: [
        { emoji: "🐾", title: "Conceito da Campanha", description: "Definição do tom da comunicação com foco em carinho e incentivo à compra." },
        { emoji: "📱", title: "Design Responsivo", description: "Adaptação completa para leitura confortável em mobile e desktop." },
        { emoji: "🛍️", title: "Elementos Interativos", description: "Criação de áreas clicáveis e incentivo visual para retorno ao site." },
        { emoji: "🎯", title: "Copy Criativa", description: "Mensagens com tom leve, emocional e direto, despertando engajamento." },
        { emoji: "🔍", title: "Testes A/B", description: "Validação de diferentes versões para otimização de conversão." } 
      ],
      results: {
        metrics: [
          { value: "+60%", description: "de cliques em campanhas Pet Friday", icon: "📈" },
          { value: "↑ Fidelização", description: "Mais interações recorrentes com o e-commerce", icon: "🔁" },
          { value: "💖", description: "Maior conexão com o público pet lover", icon: "🐶" }
        ],
        feedback: "O e-mail se destacou pela combinação de visual encantador e funcionalidade estratégica, incentivando o retorno ao site."
      },
      tools: [
        { name: "HTML", icon: "📧", color: "bg-orange-100 dark:bg-orange-800" },
        { name: "CSS", icon: "🎨", color: "bg-blue-100 dark:bg-blue-800" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-800" }
      ],
      lessons: [
        {
          title: "Comunicação emocional",
          description: "Entendi a importância de tocar o público-alvo através da linguagem e estética afetiva."
        },
        {
          title: "Design para e-mail marketing",
          description: "Pratiquei boas práticas de layout, contraste e acessibilidade em e-mails promocionais."
        },
        {
          title: "Experiência mobile-first",
          description: "Refinei a abordagem responsiva priorizando smartphones."
        }
      ]
    },
    en: {
      title: "Meu Aumigo HTML Email",
      subtitle: "Interactive and responsive design for the Pet Friday campaign",
      overview: {
        objective: "Create an eye-catching email that follows order updates and promotes Pet Friday, encouraging new purchases.",
        challenge: "Align visual identity, clarity, and interactivity in a layout suitable for all devices.",
        solution: "Responsive email with engaging visuals and strategic CTAs."
      },
      process: [
        { emoji: "🐾", title: "Campaign Concept", description: "Defined tone focused on affection and purchase encouragement." },
        { emoji: "📱", title: "Responsive Design", description: "Full adaptation for comfortable reading on mobile and desktop." },
        { emoji: "🛍️", title: "Interactive Elements", description: "Clickable areas and visual highlights to drive traffic to the site." },
        { emoji: "🎯", title: "Creative Copy", description: "Light and emotional messaging encouraging user action." },
        { emoji: "🔍", title: "A/B Testing", description: "Validation of different versions for conversion optimization." }
      ],
      results: {
        metrics: [
          { value: "+60%", description: "clicks on Pet Friday campaigns", icon: "📈" },
          { value: "↑ Loyalty", description: "Increased recurring user engagement", icon: "🔁" },
          { value: "💖", description: "Greater connection with pet lovers", icon: "🐶" }
        ],
        feedback: "The email stood out by combining charming visuals and strategic usability, boosting traffic to the site."
      },
      tools: [
        { name: "HTML", icon: "📧", color: "bg-orange-100 dark:bg-orange-800" },
        { name: "CSS", icon: "🎨", color: "bg-blue-100 dark:bg-blue-800" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-800" }
      ],
      lessons: [
        {
          title: "Emotional communication",
          description: "I learned how to connect with audiences using warmth and visual identity."
        },
        {
          title: "Email marketing design",
          description: "Applied best practices in layout, contrast, and accessibility for email."
        },
        {
          title: "Mobile-first experience",
          description: "Improved responsive design with mobile as the main focus."
        }
      ]
    },
    es: {
      title: "Correo HTML Meu Aumigo",
      subtitle: "Diseño interactivo y responsivo para la campaña Pet Friday",
      overview: {
        objective: "Crear un correo visualmente atractivo que acompañe pedidos y promueva Pet Friday, incentivando nuevas compras.",
        challenge: "Alinear identidad visual, claridad e interactividad en un diseño accesible para todos los dispositivos.",
        solution: "Email responsivo con visuales encantadores y CTAs estratégicos."
      },
      process: [
        { emoji: "🐾", title: "Concepto de Campaña", description: "Definición del tono con enfoque afectivo e persuasivo." },
        { emoji: "📱", title: "Diseño Responsivo", description: "Adaptación total para lectura cómoda en móviles y escritorio." },
        { emoji: "🛍️", title: "Elementos Interactivos", description: "Zonas clicables y llamados visuales para regresar al sitio." },
        { emoji: "🎯", title: "Copy Creativo", description: "Mensajes con tono liviano, emocional y directo." },
        { emoji: "🔍", title: "Pruebas A/B", description: "Validación de diferentes versiones para optimización de conversión." } 
      ],
      results: {
        metrics: [
          { value: "+60%", description: "de clics en campañas Pet Friday", icon: "📈" },
          { value: "↑ Fidelización", description: "Mayor recurrencia de interacción con el e-commerce", icon: "🔁" },
          { value: "💖", description: "Conexión emocional con amantes de mascotas", icon: "🐶" }
        ],
        feedback: "El correo destacó por su visual encantador y funcionalidad estratégica, impulsando visitas al sitio."
      },
      tools: [
        { name: "HTML", icon: "📧", color: "bg-orange-100 dark:bg-orange-800" },
        { name: "CSS", icon: "🎨", color: "bg-blue-100 dark:bg-blue-800" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-800" }
      ],
      lessons: [
        {
          title: "Comunicación emocional",
          description: "Aprendí a conectar con el público mediante lenguaje y estética afectiva."
        },
        {
          title: "Diseño para email marketing",
          description: "Apliqué buenas prácticas de contraste, jerarquía y usabilidad en correos."
        },
        {
          title: "Experiencia mobile-first",
          description: "Priorización del diseño adaptado a móviles en la experiencia general."
        }
      ]
    }
  };

  const t = translations[currentLanguage] || translations['pt'];

  const handleBackToMain = () => {
    router.push('/');
  };

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  const galleryImages = {
    pt: [
      { src: Slide1PT, alt: "Banner da Pet Friday", caption: "Promoções imperdíveis para seu melhor amigo" },
      { src: Slide2PT, alt: "Produtos em destaque", caption: "Cuidados e acessórios com até 50% off" },
      { src: Slide3PT, alt: "Ambiente pet friendly", caption: "Amor, cuidado e diversão garantida" }
    ],
    en: [
      { src: Slide1EN, alt: "Pet Friday Banner", caption: "Unmissable deals for your best friend" },
      { src: Slide2EN, alt: "Featured products", caption: "Care and accessories up to 50% off" },
      { src: Slide3EN, alt: "Pet-friendly space", caption: "Love, care, and guaranteed fun" }
    ],
    es: [
      { src: Slide1ES, alt: "Banner de Pet Friday", caption: "Ofertas imperdibles para tu mejor amigo" },
      { src: Slide2ES, alt: "Productos destacados", caption: "Cuidado y accesorios con hasta 50% de descuento" },
      { src: Slide3ES, alt: "Ambiente amigable para mascotas", caption: "Amor, cuidado y diversión garantizada" }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header id="project-header">
        <ProjectsNav 
          language={currentLanguage} 
          onLanguageChange={handleLanguageChange}
          onBackToMain={handleBackToMain}
        />
      </header>

      <main id="project-main">
        <section id="project-hero">
          <ProjectHero 
            title={t.title}
            subtitle={t.subtitle}
            image={MeuAumigoLogoLight}
            darkImage={MeuAumigoLogoDark}
            language={currentLanguage}
          />
        </section>

        <section id="project-overview">
          <ProjectOverview 
            objective={t.overview.objective}
            challenge={t.overview.challenge}
            solution={t.overview.solution}
            language={currentLanguage}
          />
        </section>

        <section id="creative-process">
          <CreativeProcess
            steps={t.process}
            language={currentLanguage}
          />
        </section>

        <section id="results-impact">
          <ResultsImpact 
            metrics={t.results.metrics}
            feedback={t.results.feedback}
            language={currentLanguage}
          />
        </section>

        <section id="project-gallery">
          <GalleryCarousel 
            language={currentLanguage}
            images={galleryImages}
          />
        </section>

        <section id="tools-used">
          <ToolsUsed
            tools={t.tools}
            language={currentLanguage}
          />
        </section>

        <section id="lessons-learned">
          <LessonsLearned
            lessons={t.lessons}
            language={currentLanguage}
          />
        </section>

        <section id="project-cta">
          <ProjectCTA
            language={currentLanguage}
          />
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;