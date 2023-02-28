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
        transition: {delay: custom * 0.3}
    }),
}

const Contacts = () => {
    const {t} = useTranslation();

    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4, once: true}}
                    custom={0.4}
                    variants={textAnimation}
                    className="contacts__title"
                >
                    {t("contact us")}
                </motion.h2>
                <div className="contacts__wrap">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.4, once: true}}
                        custom={0.6}
                        variants={textAnimation}
                        className="contacts__item"
                    >
                        Tel:
                        <a href="tel:+380978425148" className="contacts__link">+38 (097) 842-51-48</a>
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.4, once: true}}
                        custom={0.8}
                        variants={textAnimation}
                        className="contacts__item"
                    >
                        Email:
                        <a href="mailto:expample@gmail.com" className="contacts__link">svitcomposites@gmail.com</a>
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
