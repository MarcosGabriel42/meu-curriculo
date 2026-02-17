import "./Hero.css";
import profile from "../assets/profile.jpg";
import { useTranslation } from "react-i18next";



function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src={profile}
          alt="Foto de perfil"
          className="profile-img"
          data-aos="zoom-in"
        />

        <div className="hero-text" data-aos="fade-left">
          <h1>Marcos Gabriel</h1>
          <h2>{t("hero.role")}</h2>
          <p>{t("hero.location")}</p>

          <div className="hero-buttons">
            <a
              href="https://github.com/MarcosGabriel42"
              target="_blank"
              rel="noreferrer"
            >
              {t("links.github")}
            </a>

            <a
              href="https://www.linkedin.com/in/marcos-gabriel42"
              target="_blank"
              rel="noreferrer"
            >
              {t("links.linkedin")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
