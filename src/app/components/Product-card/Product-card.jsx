import React from "react";

const ProductCard = ({ src, alt, title, description }) => {
    return (
        <div className="product-card">
            <div className="product-card__logo">
                <img src={src} alt={alt} className="product-card__logo-img"/>
            </div>
            <h3 className="product-card__title">{title}</h3>
            <p className="product-card__description">{description}</p>
        </div>
    )
}

export default ProductCard;
