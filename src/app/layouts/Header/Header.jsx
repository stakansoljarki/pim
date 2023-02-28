import React, {useState, useTransition} from "react";
import {useTranslation} from "react-i18next";

import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import classNames from "classnames";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Header = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const [isBurgerActive, setBurgerActive] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <AnchorLink href="#home" className="header__logo">
                    {t("main")}
                </AnchorLink>
                <nav className={classNames('header__nav', { 'header__nav--mobile-open': isBurgerActive })}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <AnchorLink href='#about' className="header__nav-link">{t("about")}</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href='#characteristic' className="header__nav-link">{t("characteristics")}</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href='#product' className="header__nav-link">{t("product")}</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href="#projects" className="header__nav-link">{t("projects")}</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href="#contacts" className="header__nav-link">{t("contacts")}</AnchorLink>
                        </li>
                    </ul>
                    <div className="header__language-box">
                        <button className="header__language-button" onClick={() => changeLanguage("en")}>eng</button>
                        <button className="header__language-button" onClick={() => changeLanguage("ru")}>ukr</button>
                    </div>
                </nav>
                <BurgerMenu isBurgerActive={isBurgerActive} setBurgerActive={setBurgerActive} />
            </div>
        </header>
    )
}

export default Header;
