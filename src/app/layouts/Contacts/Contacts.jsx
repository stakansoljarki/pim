import React from "react";
import {useTranslation} from "react-i18next";

const Contacts = () => {
    const {t} = useTranslation();

    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title">{t("contact us")}</h2>
                <div className="contacts__wrap">
                    <p className="contacts__item">
                        Tel:
                        <a href="tel:+380978425148" className="contacts__link">+38 (097) 842-51-48</a>
                    </p>
                    <p className="contacts__item">
                        Email:
                        <a href="mailto:expample@gmail.com" className="contacts__link">svitcomposites@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
