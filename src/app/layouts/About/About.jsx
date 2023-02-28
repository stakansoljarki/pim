import React from "react";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom=> ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    }),
}

const About = () => {
    const {t} = useTranslation();

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            className="about" id="about"
        >
            <div className="about__container">
                <motion.h2
                    custom={0.5}
                    variants={textAnimation}
                    className="about__title">{t("about")}
                </motion.h2>
                <motion.p
                    custom={1}
                    variants={textAnimation}
                    className="about__description">
                    <span className="about__bold">{t("about name")}</span>
                    {t("about description")}
            </motion.p>
            </div>
        </motion.section>
    )
}

export default About;
