import React, {useState} from "react";

import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import classNames from "classnames";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Header = () => {
    const [isBurgerActive, setBurgerActive] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <AnchorLink href="#home" className="header__logo">
                    СвітКомпозитів
                </AnchorLink>
                <nav className={classNames('header__nav', { 'header__nav--mobile-open': isBurgerActive })}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <AnchorLink href='#about' className="header__nav-link">Про нас</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href='#characteristic' className="header__nav-link">Характеристики</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href='#product' className="header__nav-link">Продукція</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href="#projects" className="header__nav-link">Проєкти</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href="#contacts" className="header__nav-link">Контакти</AnchorLink>
                        </li>
                    </ul>
                </nav>
                <BurgerMenu isBurgerActive={isBurgerActive} setBurgerActive={setBurgerActive} />
            </div>
        </header>
    )
}

export default Header;
