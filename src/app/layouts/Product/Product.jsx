import React from "react";
import {useTranslation} from "react-i18next";

import ProductCard from "../../components/Product-card/Product-card";

import productData from "./constants";

const Product = () => {
    const {t} = useTranslation();

    return (
        <section className="product">
            <div className="product__container">
                <h2 className="product__title">{t("composite rebar")}</h2>
                <div className="product__cards">
                    {productData.map((productItem) => (
                        <ProductCard
                            key={productItem.id}
                            src={productItem.src}
                            alt={productItem.alt}
                            title={t(productItem.title)}
                            description={t(productItem.description)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product;
