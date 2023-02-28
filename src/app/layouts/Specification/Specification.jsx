import React, {useState} from "react";
import {useTranslation} from "react-i18next";

import Modal from "../../components/Modal/Modal";

import image1 from './images/1.png'
import image2 from './images/2.jpg'

const Specification = () => {
    const [modalActive, setModalActive] = useState()

    const {t} = useTranslation();

    return (
        <section className="specification"  id="product">
            <h2 className="specification__title">{t("product")}</h2>
            <div className="specification__container">
                <button onClick={() => setModalActive(true)} className="specification__link">
                    <div className="specification__logo">
                        <img src={image2} alt="" className="specification__img"/>
                    </div>
                    <p className="specification__name">{t("FRP rebar")}</p>
                </button>
                <button onClick={() => setModalActive(true)} className="specification__link">
                    <div className="specification__logo">
                        <img src={image1} alt="" className="specification__img"/>
                    </div>
                    <p className="specification__name">{t("FRP rod")}</p>
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2 className="modal__title">{t("contact us")}</h2>
                <div className="modal__wrap">
                    <p className="modal__item">
                        Tel:
                        <a href="tel:+380978425148" className="modal__link">+38 (097) 842-51-48</a>
                    </p>
                    <p className="modal__item">
                        Email:
                        <a href="mailto:expample@gmail.com" className="modal__link">svitcomposites@gmail.com</a>
                    </p>
                </div>
            </Modal>
        </section>
    )
}

export default Specification;
