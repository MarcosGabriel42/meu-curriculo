import "./skills.css";
import { useTranslation } from "react-i18next";

function Skills() {

  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">

      <h2 data-aos="fade-up">{t("skills.title")}</h2>

      <div className="skills-container">

        <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
          <h3>{t("skills.frontend")}</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </div>

        <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
          <h3>{t("skills.tools")}</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>WordPress</li>
            <li>Photoshop</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
          <h3>{t("skills.others")}</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Responsividade</li>
            <li>Consumo de APIs</li>
            <li>Versionamento</li>
            <li>Prototipação</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;
