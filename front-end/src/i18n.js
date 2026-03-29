import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        hero: {
          title: "Desenvolvimento Web e Mobile",
          subtitle: "que transforma ideias em produtos digitais",
          description:
            "Crio interfaces modernas, responsivas e focadas em conversão para ajudar seu negócio a crescer no digital.",
          contact: "Entrar em contato",
        },

        about: {
          title: "Prazer, eu sou o Andy",
          desc1:
            "Sou desenvolvedor web e mobile, especializado na criação de produtos digitais modernos, rápidos e escaláveis.",
          desc2:
            "Trabalho transformando ideias em sites profissionais, aplicações web e identidades digitais que ajudam empresas a crescer online.",
          desc3:
            "Meu foco é unir design estratégico, tecnologia e experiência do usuário para criar soluções que realmente geram resultado.",
          button: "Faça um orçamento",
        },

        services: {
          title: "Soluções digitais para empresas que querem crescer",
          subtitle:
            "Desenvolvo soluções digitais completas que ajudam empresas a se posicionarem melhor na internet e conquistarem mais clientes.",
          button: "Quero um orçamento",

          web: {
            title: "Desenvolvimento web",
            desc: "Criação de sites profissionais, landing pages e aplicações web modernas.",
          },
          mobile: {
            title: "Desenvolvimento Mobile",
            desc: "Aplicativos modernos para Android e iOS com alto desempenho.",
          },
          design: {
            title: "Identidade Visual",
            desc: "Criação de logotipos e identidade visual estratégica.",
          },
          hosting: {
            title: "Domínio e Hospedagem",
            desc: "Configuração completa para colocar seu site no ar com segurança.",
          },
        },

        tech: {
          title: "Do Back-end ao Front-end",
          desc1:
            "Desenvolvo soluções completas, cuidando de todas as etapas do projeto, desde a arquitetura do sistema até a interface final.",
          desc2:
            "Utilizo tecnologias modernas para garantir performance, escalabilidade e segurança.",
          button: "Saiba mais",
        },

        clients: {
          title: "Clientes que confiam no meu trabalho",
        },

        header: {
          home: "Início",
          about: "Sobre",
          services: "Serviços",
          tech: "Tecnologias",
          projects: "Projetos",
          feedbacks: "Feedbacks",
          contact: "Entrar em contato",
        },

        projects: {
          title: "Projetos",
          button: "Ver projeto",

          1: {
            type: "Landing Page",
            title: "ZipRecruiter Newsletter",
            description:
              "Este projeto é uma landing page desenvolvida para a ZipRecruiter, com foco em inscrição na newsletter e engajamento do usuário. A página foi projetada para conectar profissionais a oportunidades de trabalho globais, oferecendo insights, dicas de carreira e tendências do mercado diretamente no e-mail. Com uma interface limpa, chamadas para ação estratégicas e foco na experiência do usuário, o objetivo é gerar valor, aumentar conversões e construir um relacionamento contínuo com os usuários.",
          },

          2: {
            type: "Site institucional",
            title: "Barreto & Santana Advocacia",
            description:
              "Este projeto é um site institucional desenvolvido para o escritório Barreto & Santana Advocacia, de Belo Horizonte (MG), com foco em transmitir credibilidade, profissionalismo e clareza na comunicação. A página foi estruturada para apresentar as áreas de atuação, diferenciais do escritório, depoimentos de clientes e um canal direto de contato. Com um layout responsivo, interface limpa e navegação intuitiva, o objetivo é fortalecer a presença digital, gerar confiança e potencializar a captação de novos clientes.",
          },

          3: {
            type: "Landing Page",
            title: "Comunidade Alta Performance Integral",
            description:
              "Este projeto é uma landing page desenvolvida para a Comunidade de Alta Performance Integral, com foco em conversão e conexão com o público. A página foi estruturada para apresentar de forma clara o valor da comunidade, conduzindo o usuário por uma jornada estratégica desde a identificação de suas dores até a decisão de compra. Com uma interface limpa, linguagem humanizada e foco na experiência do usuário, o objetivo é gerar engajamento, fortalecer a confiança e direcionar o usuário para a plataforma da Hotmart.",
          },

          4: {
            type: "Site institucional",
            title: "Bravo Construções",
            description:
              "Este projeto é um site institucional desenvolvido para a Bravo Construções, com foco na modernização da presença digital e na clareza da comunicação dos serviços. A página foi estruturada para apresentar os serviços, projetos realizados e diferenciais da empresa de forma estratégica e objetiva. Com uma interface limpa, navegação intuitiva e foco na experiência do usuário, o objetivo é transmitir profissionalismo, gerar confiança e fortalecer a autoridade da marca no setor da construção civil.",
          },
        },

        feedbacks: {
          title: "O que meus clientes dizem",
          subtitle:
            "Depoimentos reais de pessoas que confiaram no meu trabalho para crescer no digital",
          client: "Cliente",

          1: {
            text: "Precisava de um site profissional para minha empresa e o resultado superou minhas expectativas. O design ficou moderno, rápido e já comecei a receber novos contatos na primeira semana.",
          },
          2: {
            text: "Meu site antigo não convertia nada. Depois do novo layout e melhorias de UX, comecei a ter muito mais leads entrando pelo formulário e WhatsApp.",
          },
          3: {
            text: "O projeto foi entregue no prazo e com uma qualidade excelente. O site ficou extremamente rápido e bem otimizado para SEO, o que já melhorou meu posicionamento no Google.",
          },
          4: {
            text: "Trabalho impecável. Além de desenvolver o site, também me ajudou com a estrutura e organização do conteúdo, o que fez toda diferença na apresentação da minha marca.",
          },
          5: {
            text: "Precisava de uma landing page para campanha e o resultado foi direto ao ponto: layout limpo, carregamento rápido e ótima conversão.",
          },
        },

        form: {
          title: "Vamos criar seu projeto?",
          subtitle:
            "Me conte um pouco sobre sua ideia e eu entro em contato para te ajudar.",

          name: "Seu nome",
          email: "Seu email",
          phone: "Seu telefone (WhatsApp)",

          projectType: "Tipo de projeto",
          site: "Site institucional",
          landing: "Landing Page",
          system: "Sistema Web",
          mobile: "Aplicativo Mobile",
          design: "UI/UX Design",

          message: "Fale sobre seu projeto...",

          send: "Enviar mensagem",
          sending: "Enviando...",

          success: "Mensagem enviada com sucesso 🚀",
          error: "Erro ao enviar. Tente novamente.",
        },

        footer: {
          services: "Desenvolvimento Web • Aplicações Web • Design Digital",
          rights: "Todos os direitos reservados.",
          instagram: "Instagram",
          linkedin: "LinkedIn",
          github: "GitHub",
        },
      },
    },

    en: {
      translation: {
        hero: {
          title: "Web and Mobile Development",
          subtitle: "that turns ideas into digital products",
          description:
            "I create modern, responsive, conversion-focused interfaces to help your business grow online.",
          contact: "Get in touch",
        },

        about: {
          title: "Nice to meet you, I'm Andy",
          desc1:
            "I'm a web and mobile developer specialized in building modern, fast and scalable digital products.",
          desc2:
            "I transform ideas into professional websites, web applications and digital identities that help businesses grow online.",
          desc3:
            "My focus is to combine strategic design, technology and user experience to create solutions that actually generate results.",
          button: "Request a quote",
        },

        services: {
          title: "Digital solutions for companies that want to grow",
          subtitle:
            "I develop complete digital solutions that help businesses position themselves better online and attract more clients.",
          button: "I want a quote",

          web: {
            title: "Web Development",
            desc: "Creation of professional websites, landing pages and modern web applications.",
          },
          mobile: {
            title: "Mobile Development",
            desc: "Modern apps for Android and iOS with high performance.",
          },
          design: {
            title: "Brand Identity",
            desc: "Creation of logos and strategic visual identity.",
          },
          hosting: {
            title: "Domain & Hosting",
            desc: "Complete setup to get your website online securely.",
          },
        },

        tech: {
          title: "From Back-end to Front-end",
          desc1:
            "I build complete solutions, handling all stages of the project from system architecture to the final interface.",
          desc2:
            "I use modern technologies to ensure performance, scalability and security.",
          button: "Learn more",
        },

        projects: {
          title: "Projects",
          button: "View Project",

          1: {
            type: "Landing Page",
            title: "ZipRecruiter Newsletter",
            description:
              "This project is a landing page built for ZipRecruiter, focused on newsletter sign-ups and user engagement. The page was designed to connect professionals with global job opportunities, delivering insights, career tips, and market trends directly to their inbox. With a clean interface, strategic calls to action, and a strong focus on user experience, the goal is to provide value, increase conversions, and build a lasting relationship with users.",
          },

          2: {
            type: "Business Website",
            title: "Barreto & Santana Law Firm",
            description:
              "This project is a business website developed for Barreto & Santana Law Firm, based in Belo Horizonte, focused on conveying credibility, professionalism, and clear communication. The page was structured to showcase practice areas, highlight the firm’s strengths, feature client testimonials, and provide a direct contact channel. With a responsive layout, clean interface, and intuitive navigation, the goal is to strengthen the digital presence, build trust, and increase new client acquisition.",
          },

          3: {
            type: "Landing Page",
            title: "High Performance Community",
            description:
              "This project is a landing page created for the High Performance Community, focused on conversion and building a strong connection with the audience. The page was structured to clearly communicate the value of the community, guiding users through a strategic journey from identifying their pain points to making a purchase decision. With a clean interface, human-centered messaging, and a strong focus on user experience, the goal is to drive engagement, build trust, and direct users to the Hotmart platform.",
          },

          4: {
            type: "Business Website",
            title: "Bravo Construction",
            description:
              "This project is a business website developed for Bravo Construction, focused on modernizing the company’s digital presence and improving service communication. The page was structured to showcase services, highlight completed projects, and present the company’s key differentiators in a clear and strategic way. With a clean interface, intuitive navigation, and a strong focus on user experience, the goal is to convey professionalism, build trust, and strengthen the brand’s authority in the construction industry.",
          },
        },

        clients: {
          title: "Clients who trust my work",
        },

        header: {
          home: "Home",
          about: "About",
          services: "Services",
          tech: "Technologies",
          projects: "Projects",
          feedbacks: "Testimonials",
          contact: "Contact",
        },

        feedbacks: {
          title: "What my clients say",
          subtitle:
            "Real testimonials from people who trusted my work to grow their business online",
          client: "Client",

          1: {
            text: "I needed a professional website for my business and the result exceeded my expectations. The design is modern, fast, and I started receiving new leads within the first week.",
          },
          2: {
            text: "My old website wasn't converting at all. After the redesign and UX improvements, I started getting significantly more leads through the form and WhatsApp.",
          },
          3: {
            text: "The project was delivered on time with excellent quality. The website is extremely fast and SEO-optimized, which already improved my Google rankings.",
          },
          4: {
            text: "Outstanding work. Besides developing the website, he also helped structure and organize the content, which made a huge difference in presenting my brand.",
          },
          5: {
            text: "I needed a landing page for a campaign and the result was exactly what I needed: clean design, fast loading, and great conversion.",
          },
        },

        form: {
          title: "Let's build your project?",
          subtitle:
            "Tell me a bit about your idea and I’ll get in touch to help you.",

          name: "Your name",
          email: "Your email",
          phone: "Your phone (WhatsApp)",

          projectType: "Project type",
          site: "Business Website",
          landing: "Landing Page",
          system: "Web System",
          mobile: "Mobile App",
          design: "UI/UX Design",

          message: "Tell me about your project...",

          send: "Send message",
          sending: "Sending...",

          success: "Message sent successfully 🚀",
          error: "Error sending message. Try again.",
        },

        footer: {
          services: "Web Development • Web Applications • Digital Design",
          rights: "All rights reserved.",
          instagram: "Instagram",
          linkedin: "LinkedIn",
          github: "GitHub",
        },
      },
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
