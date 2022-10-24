import React from "react";

import image from "./images/composite.jpg"

const Composite = () => {
    return (
        <section id="home" className="composite">
            <h1 className="composite__title">Світ Композитів</h1>
            <img src={image} alt="" className="composite__image"/>
        </section>
    )
}

export default Composite;
