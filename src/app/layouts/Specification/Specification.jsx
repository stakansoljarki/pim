import React from "react";

import image1 from './images/1.jpg'
import image2 from './images/2.jpg'

const Specification = () => {
    return (
        <section className="specification">
            <h2 className="specification__title">Продукція</h2>
            <div className="specification__container">
                <a href="/" className="specification__link">
                    <div className="specification__logo">
                        <img src={image1} alt="" className="specification__img"/>
                    </div>
                    <p className="specification__name">Арматура склокомпозитна (АКС)</p>
                </a>
                <a href="/" className="specification__link">
                    <div className="specification__logo">
                        <img src={image2} alt="" className="specification__img"/>
                    </div>
                    <p className="specification__name">Стрижень із АКС</p>
                </a>
            </div>
        </section>
    )
}

export default Specification;
