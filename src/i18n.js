import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      en: {
        translation: {
          description: {
            footer: '© 2026 Pedro Henrique Alves Lima. All rights reserved.',
            menu0: 'Home',
            menu1: 'About',
            menu2: 'Projects',
            menu3: 'Contact',

            role: 'Full-Stack Developer',
            tagline: 'Law graduate turned full-stack developer. Shipping production apps with React, Node, PHP and MySQL. Fully remote, based in Brazil.',
            techs: 'Stack',

            about: 'About me',
            dedicated: 'A mid-level full-stack developer focused on shipping things that work.',
            mainAboutMe: "I'm Pedro Henrique Alves Lima, a law graduate who switched into software in 2023 and never looked back. I now work as a mid-level full-stack developer with 2+ years of professional experience building production applications.\n\nMy daily stack is React, TypeScript, Node.js, PHP and MySQL. I started programming out of curiosity to understand how the logic behind a video game works, and that itch has only grown. I'm comfortable owning a feature end-to-end, from database schema to UI polish.\n\nI'm based in Brazil (UTC-3) and work fully remote. Outside of code: basketball, video games and chess.",

            projectsTitle: 'Selected projects',
            projectsSubtitle: 'Production work and technical challenges.',

            chessmateTitle: 'ChessMate',
            chessmateDesc: 'Live chess assistant powered by an engine that suggests the best move from any board position and identifies the opening being played, all through a real-time chat with the engine. Built end-to-end with a clean React frontend and deployed to production.',
            chessmateStack: 'React · TypeScript · Node.js · WebSockets',

            ayumiTitle: 'Ayumi Dentista — Landing Page',
            ayumiDesc: 'Conversion-focused landing page for a dental clinic, in production. Responsive layout, optimized for mobile-first traffic, deployed on Vercel.',
            ayumiStack: 'React · TypeScript · Tailwind CSS',

            SW: 'Star Wars API Challenge',
            SW2: 'Front-end technical challenge for a developer position. Consumes the Star Wars REST API with filter, search and pagination, built to demonstrate component composition and async data handling.',
            SW3: 'JavaScript · React · TailwindCSS',

            liveLink: 'Live demo',
            githubLink: 'View code',
            unavailable: 'Code (private repo)',

            contactTitle: 'Get in touch',
            contactSubtitle: 'Open to remote full-stack roles. Best way to reach me is email.',
            copy: 'Click to copy',
            copied: 'Email copied!',
          },
        },
      },
      pt: {
        translation: {
          description: {
            footer: '© 2026 Pedro Henrique Alves Lima. Todos os direitos reservados.',
            menu0: 'Início',
            menu1: 'Sobre',
            menu2: 'Projetos',
            menu3: 'Contato',

            role: 'Desenvolvedor Full-Stack',
            tagline: 'Bacharel em Direito que migrou pra desenvolvimento. Entregando aplicações em produção com React, Node, PHP e MySQL. 100% remoto, baseado no Brasil.',
            techs: 'Stack',

            about: 'Sobre mim',
            dedicated: 'Desenvolvedor full-stack pleno, focado em entregar coisas que funcionam.',
            mainAboutMe: 'Sou Pedro Henrique Alves Lima, bacharel em direito que migrou pra desenvolvimento em 2023 e nunca mais voltou. Hoje atuo como dev full-stack pleno com mais de 2 anos de experiência profissional construindo aplicações em produção.\n\nMeu dia a dia é React, TypeScript, Node.js, PHP e MySQL. Comecei a programar por curiosidade de entender a lógica por trás de um video-game, e a vontade só cresceu. Me sinto à vontade tocando uma feature de ponta a ponta, do schema do banco até o polimento da UI.\n\nMoro no Brasil (UTC-3) e trabalho 100% remoto. Fora do código: basquete, video-games e xadrez.',

            projectsTitle: 'Projetos selecionados',
            projectsSubtitle: 'Trabalhos em produção e desafios técnicos.',

            chessmateTitle: 'ChessMate',
            chessmateDesc: 'Assistente de xadrez em produção, integrado a uma engine que sugere o melhor lance a partir de qualquer posição e identifica o nome da abertura sendo jogada, tudo via chat em tempo real com a engine. Construído de ponta a ponta com frontend React limpo e deploy em produção.',
            chessmateStack: 'React · TypeScript · Node.js · WebSockets',

            ayumiTitle: 'Ayumi Dentista — Landing Page',
            ayumiDesc: 'Landing page focada em conversão pra uma clínica odontológica, em produção. Layout responsivo, otimizado pra tráfego mobile-first, deploy na Vercel.',
            ayumiStack: 'React · TypeScript · Tailwind CSS',

            SW: 'Desafio Star Wars API',
            SW2: 'Desafio técnico front-end pra vaga de desenvolvedor. Consome a Star Wars REST API com filtro, busca e paginação, feito pra demonstrar composição de componentes e manipulação assíncrona.',
            SW3: 'JavaScript · React · TailwindCSS',

            liveLink: 'Ver ao vivo',
            githubLink: 'Ver código',
            unavailable: 'Código (repo privado)',

            contactTitle: 'Entre em contato',
            contactSubtitle: 'Aberto a vagas full-stack remotas. Melhor forma de falar comigo é por email.',
            copy: 'Clique para copiar',
            copied: 'Email copiado!',
          },
        },
      },
    },
  });

export default i18n;
