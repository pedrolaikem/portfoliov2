import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


//Here is where the translations are!


i18n
  // detect user language

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            //English translations
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            footer:'2023. All rights reserved.',
            menu1:'About',
            menu2:'Projects',
            menu3:'Contact',
            aboutMe:'Hello, I am Pedro Henrique. Bachelor in Law. <br />Now I am pursuing a technical degree on <br>systems analysis and development. <br />I use HTML, CSS, JavaScript, React and TailwindCSS.',
            techs:'Technologies: ',
            about:'About me',
            dedicated:'A dedicated and constantly learning developer',
            mainAboutMe: 'Hello, I am Pedro Henrique Alves Lima, I am 23 years olds, a web developer with a law degree. <br /><br />Since mid-2023, I have dedicated myself daily for studying technologies <br /> such as HTML, CSS, JavaScript, React and TailwindCSS. <br /><br /> My foray into programming was motivated by curiosity and will to understand how the logic <br />behind a video-game works, and boosted by the will to create an emulator for a game, Teamfight Tactics. <br /> <br /> I seek for challenges and opportunities to apply my skills and contribute to projects. <br /> I also like basketball and video-games. ',
            Botafogo1: "Re-design of Botafogo F.C's website",
            Botafogo2: "This project involves the complete reconstruction of the Botafogo(A Brazilian soccer team) website, applying a new <br />design created by the team, which is composed by me and my friend, Bárbara Oliveira, a UX designer. <br /> We utilized the tool Figma for design, and the website is beeing implemented with HTML, JavaScript and TailwindCSS.",
            Botafogo3: 'Live(unavailable)',
            Botafogo4: "Technologies: JavaScript and TailwindCSS",
            Bart1: 'In this project, the emphasis is on creating a website for an English course, <br />highlighting the landing page and subsequent pages.<br /> This website, developed with HTML, CSS and React.JS, presents a simple and straightforward experience.',
            Bart2:'Live(unavailable)',
            Bart3:"Technologies: ReactJS",
            contact: "Get in touch with me!",
            copy: "Click to copy",
            copied: "Email copied!"
          }
        }
      },
      pt: {
        translation: {
          description: {
            //Portuguese translations
            part1: 'Edite <1>src/App.js</1> e salve para recarregar',
            footer: '2023. Todos os direitos reservados.',
            menu1:'Sobre',
            menu2:'Projetos',
            menu3:'Contato',
            aboutMe:'Olá, sou o Pedro Henrique. Bacharel em direito. <br />cursando análise e desenvolvimento de sistemas. <br />Utilizo HTML, CSS, JavaScript, React e TailwindCSS.',
            techs: 'Tecnologias: ',
            about:'Sobre mim',
            dedicated: 'Um desenvolvedor dedicado e em constante aprendizado',
            mainAboutMe: 'Olá, sou Pedro Henrique Alves Lima, tenho 23 anos, um desenvolvedor web com formação em direito. <br /><br />Desde meados de 2023, dedico-me diariamente ao estudo de tecnologias <br />como HTML, CSS, JavaScript, React e TailwindCSS. <br /><br />Minha incursão na programação foi motivada pela curiosidade em entender como funcionava a lógica <br />por trás de um video-game e impulsionada pela vontade de criar um simulador para um jogo, o Teamfight Tactics. <br /><br />Busco desafios e oportunidades para aplicar minhas habilidades e contribuir para projetos.<br />Também gosto de basquete e video-games.',
            Botafogo1: 'Re-design do Site do Botafogo F.C',
            Botafogo2: "Este projeto envolve a reconstrução completa do site do Botafogo, aplicando um novo design criado <br />pela equipe composta por mim e minha amiga, Bárbara Oliveira, uma UX designer. <br />Utilizamos a ferramenta Figma para o design, e o site está sendo implementado com HTML, JavaScript e TailwindCSS.",
            Botafogo3: 'Ao vivo(Indisponível)',
            Botafogo4: "Tecnologias: JavaScript e TailwindCSS",
            Bart1: 'Neste projeto, a ênfase está na criação de um site para <br />um curso de inglês, com destaque para a landing page e páginas subsequentes.<br />O site, desenvolvido com HTML, CSS e React.JS, apresenta uma experiência simples e direta.',
            Bart2: 'Ao vivo(Indisponível)',
            Bart3: "Tecnologias: ReactJS",
            contact: "Entre em contato!",
            copy: "Clique para copiar",
            copied: "Email copiado!",
          }
        }
      }
    }
  });

export default i18n;