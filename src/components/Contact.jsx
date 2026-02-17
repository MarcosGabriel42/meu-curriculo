import "./contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">

      <h2 data-aos="fade-up">
        {t("contact.title")}
      </h2>

      <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
        {t("contact.text")}
      </p>

      <div className="contact-buttons">

        <a
          href="mailto:marcosgabrielvc@gmail.com"
          className="contact-btn"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          📧 {t("contact.email")}
        </a>

        <a
          href="https://wa.me/5547991083257"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          💬 {t("contact.whatsapp")}
        </a>

        <a
          href="https://www.linkedin.com/in/marcos-gabriel42"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          🔗 {t("contact.linkedin")}
        </a>

        <a
          href="/cv.pdf"
          className="contact-btn cv"
          data-aos="fade-up"
          data-aos-delay="500"
          download
        >
          📄 {t("contact.cv")}
        </a>

      </div>

    </section>
  );
}

export default Contact;
