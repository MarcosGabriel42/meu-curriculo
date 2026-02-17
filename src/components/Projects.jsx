import "./projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Consultoria NovaEra",
      description: t("projects.consultoria.description"),
      tech: "Vue.js • Vite • CSS",
      link: "https://marcosgabriel42.github.io/consultoria-vue/",
    },
    {
      title: "Lista de Supermercado",
      description: t("projects.supermercado.description"),
      tech: "HTML • CSS • JavaScript",
      link: "https://marcosgabriel42.github.io/Lista-de-Supermercado/",
    },
    {
      title: "PetCare Hub",
      description: t("projects.petcare_hub.description"),
      tech: "Angular • CSS • JavaScript",
      link: "https://marcosgabriel42.github.io/petcare-hub/login",
    },    
    {
      title: "Healix",
      description: t("projects.healix.description"),
      tech: "Figma • UX/UI",
      link: "https://www.figma.com/proto/eDGFjEI1BQtDqbOKalWGyw/Healix?node-id=124-52&p=f&t=xP725aFVfcUESOVT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=124%3A52",
    },
  ];

  return (
    <section id="projects" className="projects">

      <h2 className="projects-title" data-aos="fade-up">
        {t("projects.title")}
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up">
            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <span className="project-tech">
              {project.tech}
            </span>

            <a href={project.link} target="_blank" rel="noreferrer">
              {t("projects.button")} →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
