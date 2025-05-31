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

  // Combined media array with video as first element for each language
  const mediaItems = {
    pt: [
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide1-pt.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide2-pt.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide3-pt.svg",
        alt: "Estrutura do cabeçalho do e-mail promocional",
        caption: "Parte 1: Cabeçalho com logo, título e destaque visual da campanha"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide4-pt.svg",
        alt: "Seção intermediária com produtos em destaque",
        caption: "Parte 2: Grid de produtos com preços e descrições"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide5-pt.svg",
        alt: "Rodapé com links e informações adicionais",
        caption: "Parte 3: Rodapé com botão CTA, redes sociais e dados institucionais"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide6-pt.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'video',
        url: "/videos/video-aumigo.mp4",
        alt: "Demonstração do e-mail Meu Aumigo em ação",
        caption: "Demonstração interativa do e-mail"
      }
    ],
    en: [
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide1-en.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide2-en.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide3-en.svg",
        alt: "Promotional email header layout structure",
        caption: "Part 1: Header with logo, title, and campaign highlight"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide4-en.svg",
        alt: "Middle section with featured products",
        caption: "Part 2: Product grid with prices, and descriptions"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide5-en.svg",
        alt: "Footer section with links and extra information",
        caption: "Part 3: Footer with CTA button, social links, and company details"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide6-en.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'video',
        url: "/videos/video-aumigo.mp4",
        alt: "Meu Aumigo email demonstration in action",
        caption: "Interactive email demonstration"
      }
    ],
    es: [
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide1-es.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide2-es.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide3-es.svg",
        alt: "Estructura del encabezado del correo promocional",
        caption: "Parte 1: Encabezado con logotipo, título y destaque visual"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide4-es.svg",
        alt: "Sección intermedia con productos destacados",
        caption: "Parte 2: Cuadrícula de productos con precios y descripciones"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide5-es.svg",
        alt: "Pie de página con enlaces e información adicional",
        caption: "Parte 3: Pie con botón CTA, redes sociales y datos de la empresa"
      },
      {
        type: 'image',
        src: "/images/project-meuaumigo/slide6-en.svg",
        alt: "",
        caption: ""
      },
      {
        type: 'video',
        url: "/videos/video-aumigo.mp4",
        alt: "Demostración del correo Meu Aumigo en acción",
        caption: "Demostración interactiva del correo"
      }
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
            image="/images/project-meuaumigo/capa.svg"
            darkImage="/images/project-meuaumigo/capa.svg"
            imagePosition="bottom"
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
            beforeAfterImages={{
              before: "/images/project-meuaumigo/antes.svg",
              after: "/images/project-meuaumigo/depois.svg",
              beforeAlt: "Initial HTML email layout",
              afterAlt: "Final version with design refinements and responsive adjustments"
            }}
            language={currentLanguage}
          />
        </section>

        <section id="project-gallery">
          <GalleryCarousel 
            language={currentLanguage}
            mediaItems={mediaItems}
            autoPlayVideos={true}
            videoMuted={true}
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