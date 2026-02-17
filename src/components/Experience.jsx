import "./experience.css";
import { useTranslation } from "react-i18next";

function Experience() {

  const { t } = useTranslation();

  return (
    <section id="experience" className="experience">

      <h2 data-aos="fade-up">{t("experience.title")}</h2>

      <div className="timeline">

        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content">

            <h3>{t("experience.job")}</h3>

            <span className="timeline-date">
              {t("experience.period")}
            </span>

            <p>{t("experience.p1")}</p>

            <p>{t("experience.p2")}</p>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Experience;
