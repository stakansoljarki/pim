import React from "react";
import {useTranslation} from "react-i18next";

import image from "./images/composite.jpg"

const Composite = () => {
    const {t} = useTranslation();

    return (
        <section id="home" className="composite">
            <h1 className="composite__title">{t("composite")}</h1>
            <img src={image} alt="" className="composite__image"/>
        </section>
    )
}

export default Composite;
