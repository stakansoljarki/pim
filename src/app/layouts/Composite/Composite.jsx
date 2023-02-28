import React from "react";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

import image from "./images/composite.jpg"

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

const Composite = () => {
    const {t} = useTranslation();

    return (
        <section id="home" className="composite">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4, once: true}}
                custom={0.5}
                variants={textAnimation}
                className="composite__title"
            >
                {t("composite")}
            </motion.h1>
            <img src={image} alt="" className="composite__image"/>
        </section>
    )
}

export default Composite;
