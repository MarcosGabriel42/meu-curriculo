import "./about.css";
import profile from "../assets/perfil.png";
import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-image" data-aos="fade-right">
          <img src={profile} alt="Marcos Gabriel" />
        </div>

        <div className="about-text" data-aos="fade-left">
          <h2>{t("about.title")}</h2>

          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>

        </div>

      </div>
    </section>
  );
}

export default About;
