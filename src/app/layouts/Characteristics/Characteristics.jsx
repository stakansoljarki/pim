import React from "react";
import {useTranslation} from "react-i18next";

import Table from "../../components/Table/Table";

const Characteristics = () => {
    const {t} = useTranslation();

    return (
        <section className="characteristics" id="characteristic">
            <div className="characteristics__container">
                <h2 className="characteristics__title">{t("characteristics title")}</h2>
                <p className="characteristics__description">{t("characteristics description")}</p>
                <div className="characteristics__wrap">
                    <Table/>
                </div>
            </div>
        </section>
    )
}

export default Characteristics;
