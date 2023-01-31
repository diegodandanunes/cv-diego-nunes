import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    name: "Diego Nunes",
    position: "Front End Developer",
    phone: "(51) 99286-3986",
    city: "Porto Alegre, Brasil",
    email: "diegodandanunes@gmail.com",
    jobs: [
      {
        company: "Zenvia Mobile",
        position: "Front End Software Engineer",
        description: ["Engenheiro Front End na Plataforma App Zenvia e Lead Developer no projeto interno do Design System da Zenvia - Sirius Design System"],
        date: "08/2020 - Presente",
        skills: ["Micro front ends", "Responsividade", "Vue JS", "Design System", "Gitlab", "SASS", "CI/CD"],
        remote: true,
      },
      {
        company: "Qintess",
        position: "Front End Software Engineer",
        description: ["Desenvolvedor Front End alocado na empresa Dell Technologies.", "Trabalhei no projeto Dell Financial Services, atuando no Front End do projeto e no processo de legar a plataforma antiga por um projeto novo mais robusto."],
        date: "11/2018 - 08/2020",
        skills: ["React JS", "Angular", "Styled Components", "Stylus"],
        remote: true,
      },
      {
        company: "21 Mobile",
        position: "Web Developer",
        description: ["Comecei como estagiário como Desenvolvedor Full Stack.", "No desenvolvimento Front End trabalhei com o site da 21Mobile, e desenvolvi landing pages em conjunto com o departamento de marketing. Também tive contato com as ferramentas de Back End utilizadas, como Node, PHP e banco de dados MongoDB e Postgres."],
        date: "06/2016 - 07/2018",
        skills: ["Javascript", "Node JS", "Angular", "Mongo DB"],
        remote: false,
      },
      {
        company: "Grupo L&S",
        position: "Front End Developer | Web Design",
        description: ["Atuei como um link entre o departamento de Marketing e o departamento de Engenharia de Software da empresa, criando, traduzindo e desenvolvendo protótipos de elementos de UI, landing pages e funcionalidades da plataforma de ensino da empresa."],
        date: "06/2015 - 05/2016",
        skills: ["Javascript", "HTML5", "CSS", "Bootstrap"],
        remote: false,
      },
      {
        company: "Profissional independente",
        position: "Freelance Web Designer",
        description: ["Trabalhei como freelances com clientes de diferentes segmentos, criando soluções digitais, identidade visual e logotipagem."],
        date: "01/2007 - 2013",
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Identidade visual", "Web Design"],
        remote: true,
      },
    ],
    education: [
      {
        name: "PUCRS",
        degree: "Publicidade e Propaganda",
        date: "2006-2011"
      },
      {
        name: "Unisinos",
        degree: "Análise e desenvolvimento de sistemas",
        date: "2019 - ongoing"
      },
    ],
    skills: ["Front End", "Desenvolvimento ágil", "Design System", "Responsividade", "React", "Vue", "Angular", "Unit Testing", "CI/CD"],
    courses: [
      {
        name: "Web Development Course",
        institution: "Udemy"
      },
      {
        name: "NodeJS Course",
        institution: "TreinaWeb"
      },
      {
        name: "MongoDB Complete Course",
        institution: "Udemy"
      },
      {
        name: "Formação Design Gráfico",
        institution: "Alfamídia"
      }
    ],
    profile: ["Desenvolvedor de front-end e UI formado na PUCRS. Encontro soluções usando minha expertise de Desenvolvimento Front End, aliado à minha experiência com design de UI, utilizando as tecnologias e frameworks mais importantes do mercado.", "Larga experiência com Design System e experiência com back end e desenvolvimento de API."]
  })
})
