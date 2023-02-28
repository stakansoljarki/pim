import React from "react";
import {useTranslation} from "react-i18next";

const Table = () => {
    const {t} = useTranslation();

    return (
        <div className="table">
            <div className="table__col">
                <div className="table__head-item">{t("diameter")}</div>
                <div className="table__row-item">6 (28,3 {t("millimeters")})</div>
                <div className="table__row-item">8 (50,3 {t("millimeters")})</div>
                <div className="table__row-item">10 (78,5 {t("millimeters")})</div>
                <div className="table__row-item">12 (113 {t("millimeters")})</div>
                <div className="table__row-item">14 (154 {t("millimeters")})</div>
                <div className="table__row-item">16 (201 {t("millimeters")})</div>
                <div className="table__row-item">18 (254 {t("millimeters")})</div>
                <div className="table__row-item">20 (314 {t("millimeters")})</div>
                <div className="table__row-item">22 (380 {t("millimeters")})</div>
                <div className="table__row-item">25 (491 {t("millimeters")})</div>
                <div className="table__row-item">28 (616 {t("millimeters")})</div>
                <div className="table__row-item">32 (804 {t("millimeters")})</div>
                <div className="table__row-item">36 (1018 {t("millimeters")})</div>
                <div className="table__row-item">40 (1256 {t("millimeters")})</div>
            </div>
            <div className="table__col">
                <div className="table__head-item">А240С <p>{t("steelrebar")}</p></div>
                <div className="table__row-item">1.07</div>
                <div className="table__row-item">1.90</div>
                <div className="table__row-item">2.96</div>
                <div className="table__row-item">4.26</div>
                <div className="table__row-item">5.81</div>
                <div className="table__row-item">7.58</div>
                <div className="table__row-item">9.58</div>
                <div className="table__row-item">11.84</div>
                <div className="table__row-item">14.33</div>
                <div className="table__row-item">18.52</div>
                <div className="table__row-item">23.23</div>
                <div className="table__row-item">30.32</div>
                <div className="table__row-item">38.40</div>
                <div className="table__row-item">47.37</div>
            </div>
            <div className="table__col">
                <div className="table__head-item">А400С <p>{"steelrebar2"}</p></div>
                <div className="table__row-item">1.44</div>
                <div className="table__row-item">2.56</div>
                <div className="table__row-item">4.00</div>
                <div className="table__row-item">5.76</div>
                <div className="table__row-item">7.85</div>
                <div className="table__row-item">10.24</div>
                <div className="table__row-item">12.95</div>
                <div className="table__row-item">16.00</div>
                <div className="table__row-item">19.37</div>
                <div className="table__row-item">25.03</div>
                <div className="table__row-item">31.40</div>
                <div className="table__row-item">40.98</div>
                <div className="table__row-item">51.89</div>
                <div className="table__row-item">64.02</div>
            </div>
            <div className="table__col">
                <div className="table__head-item">А500С <p>{t("steelrebar3")}</p></div>
                <div className="table__row-item">1.73</div>
                <div className="table__row-item">3.08</div>
                <div className="table__row-item">4.80</div>
                <div className="table__row-item">6.91</div>
                <div className="table__row-item">9.42</div>
                <div className="table__row-item">12.29</div>
                <div className="table__row-item">15.54</div>
                <div className="table__row-item">19.20</div>
                <div className="table__row-item">23.24</div>
                <div className="table__row-item">30.03</div>
                <div className="table__row-item">37.68</div>
                <div className="table__row-item">49.17</div>
                <div className="table__row-item">62.26</div>
                <div className="table__row-item">76.82</div>
            </div>
            <div className="table__col">
                <div className="table__head-item">{t("rebar")}</div>
                <div className="table__row-item">3.17</div>
                <div className="table__row-item">5.64</div>
                <div className="table__row-item">8.80</div>
                <div className="table__row-item">12.67</div>
                <div className="table__row-item">17.27</div>
                <div className="table__row-item">22.54</div>
                <div className="table__row-item">28.48</div>
                <div className="table__row-item">35.21</div>
                <div className="table__row-item">42.61</div>
                <div className="table__row-item">55.06</div>
                <div className="table__row-item">69.07</div>
                <div className="table__row-item">90.15</div>
                <div className="table__row-item">114.15</div>
                <div className="table__row-item">140.84</div>
            </div>
        </div>
    )
}

export default Table;
