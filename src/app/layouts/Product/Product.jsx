import React from "react";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";


import productData from "./constants";
import {MProductCard} from "../../components/Product-card/Product-card";

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

const Product = () => {
    const {t} = useTranslation();

    return (
        <section
            className="product"
        >
            <div className="product__container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true}}
                    custom={0.2}
                    variants={textAnimation}
                    className="product__title"
                >
                    {t("composite rebar")}
                </motion.h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true}}
                    custom={0.4}
                    className="product__cards">
                    {productData.map((productItem) => (
                        <MProductCard
                            custom={productItem.custom}
                            variants={textAnimation}
                            key={productItem.id}
                            src={productItem.src}
                            alt={productItem.alt}
                            title={t(productItem.title)}
                            description={t(productItem.description)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Product;
