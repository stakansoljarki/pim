import React from "react";
import {forwardRef} from "react";
import {motion} from "framer-motion";

const ProductCard = forwardRef(({ src, alt, title, description, custom }, ref) => {
    return (
        <div custom={custom} ref={ref} className="product-card">
            <div className="product-card__logo">
                <img src={src} alt={alt} className="product-card__logo-img"/>
            </div>
            <h3 className="product-card__title">{title}</h3>
            <p className="product-card__description">{description}</p>
        </div>
    )
})

export default ProductCard;

export const MProductCard = motion(ProductCard);
