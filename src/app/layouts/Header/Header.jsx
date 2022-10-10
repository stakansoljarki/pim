import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <AnchorLink href="#home" className="header__logo">
                    СвітКомпозитів
                </AnchorLink>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <AnchorLink href='#about' className="header__nav-link">Про нас</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href='#product' className="header__nav-link">Продукція</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href='#characteristic' className="header__nav-link">Характеристики</AnchorLink>
                        </li>
                        <li className="header__nav-item">
                            <AnchorLink href="#contacts" className="header__nav-link">Контакти</AnchorLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
