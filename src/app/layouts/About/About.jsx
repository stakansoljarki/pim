import React from "react";
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation();

    return (
        <section className="about" id="about">
            <div className="about__container">
                <h2 className="about__title">{t("about")}</h2>
                <p className="about__description">
                    <span className="about__bold">{t("about name")}</span>
                    {t("about description")}
            </p>
            </div>
        </section>
    )
}

export default About;
