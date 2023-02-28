import React from "react";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"
import img7 from "./img/7.jpg"
import img8 from "./img/8.jpg"
import img9 from "./img/9.jpg"
import img10 from "./img/10.jpg"
import img11 from "./img/11.jpg"
import img12 from "./img/12.jpg"

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

const Lira = () => {
    const {t} = useTranslation();

    return(
        <section className="lira">
            <div className="lira__container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true}}
                    custom={0.3}
                    variants={textAnimation}
                    className="lira__title"
                >
                    {t("lira")}
                </motion.h2>
                <div className="lira__wrap">
                    <div className="lira__text-wrap">
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.4, once: true}}
                            custom={0.3}
                            variants={textAnimation}
                            className="lira__description"
                        >
                            {t("lira description")}
                        </motion.p>
                        <ul className="lira__list">
                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.5, once: true}}
                                custom={0.7}
                                variants={textAnimation}
                                className="lira__list-item">{t("lira item1")}</motion.li>
                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.6, once: true}}
                                custom={0.9}
                                variants={textAnimation}
                                className="lira__list-item">{t("lira item2")}</motion.li>
                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.7, once: true}}
                                custom={1.1}
                                variants={textAnimation}
                                className="lira__list-item">{t("lira item3")}</motion.li>
                        </ul>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5, once: true}}
                        custom={1}
                        variants={textAnimation}
                        className="lira__photo-wrap"
                    >
                        <a
                            className="lira__link"
                            href={img1}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img1} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img2}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img2} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img3}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img3} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img4}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img4} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img5}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img5} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img6}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img6} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img7}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img7} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img8}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img8} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img9}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img9} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img10}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img10} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img11}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img11} alt="" className="lira__img"/>
                        </a>
                        <a
                            className="lira__link"
                            href={img12}
                            data-fancybox="gallery-lira"
                            rel="fancybox-gallery-lira"
                        >
                            <img src={img12} alt="" className="lira__img"/>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Lira;
