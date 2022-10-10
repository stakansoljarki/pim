import React from "react";

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title">Зв'яжіться з нами</h2>
                <div className="contacts__wrap">
                    <p className="contacts__item">
                        Tel:
                        <a href="tel:000-00-00-000" className="contacts__link">000-00-00-000</a>
                    </p>
                    <p className="contacts__item">
                        Email:
                        <a href="mailto:expample@gmail.com" className="contacts__link">example@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
