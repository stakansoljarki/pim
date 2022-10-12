import React from "react";

import ProductCard from "../../components/Product-card/Product-card";

import productData from "./constants";

const Product = () => {
    return (
        <section className="product">
            <div className="product__container">
                <h2 className="product__title">Композитна арматура це</h2>
                <div className="product__cards">
                    {productData.map((productItem) => (
                        <ProductCard
                            key={productItem.id}
                            src={productItem.src}
                            alt={productItem.alt}
                            title={productItem.title}
                            description={productItem.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product;
