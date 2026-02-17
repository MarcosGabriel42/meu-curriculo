import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // muda estilo ao rolar
  useEffect(() => {
    const handleScroll = () => {  
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll até seção
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // troca idioma + salva preferência
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo volta ao topo */}
        <h2 className="logo" onClick={() => scrollToSection("hero")}>
          Marcos Gabriel
        </h2>

        {/* Menu */}
        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>
            {t("nav.about")}
          </li>

          <li onClick={() => scrollToSection("skills")}>
            {t("nav.skills")}
          </li>

          <li onClick={() => scrollToSection("experience")}>
            {t("nav.experience")}
          </li>

          <li onClick={() => scrollToSection("contact")}>
            {t("nav.contact")}
          </li>
        </ul>

        {/* Idiomas */}
        <div className="lang-switch">
          <button onClick={() => changeLanguage("pt")}>PT</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
