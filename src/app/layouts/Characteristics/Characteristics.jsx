import React from "react";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

import Table from "../../components/Table/Table";

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom=> ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    }),
}

const Characteristics = () => {
    const {t} = useTranslation();

    return (
        <section className="characteristics" id="characteristic">
            <div className="characteristics__container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true}}
                    custom={0.4}
                    variants={textAnimation}
                    className="characteristics__title"
                >
                    {t("characteristics title")}
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: true}}
                    custom={0.5}
                    variants={textAnimation}
                    className="characteristics__description">
                    {t("characteristics description")}
                </motion.p>
                <div className="characteristics__wrap">
                    <Table/>
                </div>
            </div>
        </section>
    )
}

export default Characteristics;
