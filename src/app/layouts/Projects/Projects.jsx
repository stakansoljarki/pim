import React from "react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import {useTranslation} from "react-i18next";

import lvivData from "./constantsLviv";
import ternopilData from "./constantsTernopil";
import khersonData from "./constantsKherson";
import aksData from "./constantsAks";
import lisnykyData from "./constantsLisnyky";
import concretingData from "./constantsConcreting";
import kyivData from "./constantsKyiv";
import irpinData from "./constantsIrpin";
import overlapData from "./constantsOverlap";
import zbvData from "./constantsZbv";
import roadData from "./constantsRoad";
import platesData from "./constantsPlates";
import kpiData from "./constantsKpi";
import seamsData from "./constantsSeams";
import livanData from "./constantsLivan";
import airportData from "./constantsAirport";
import minerData from "./constantsMiner";


const Projects = () => {
    const {t} = useTranslation();

    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h2 className="projects__title">{t("projects")}</h2>
                <div className="projects__wrap">
                    <div className="projects__item">
                        <div className="projects__inner">
                            {lvivData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery"
                                    rel="fancybox-gallery-1"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Tram tracks")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {ternopilData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery2"
                                    rel="fancybox-gallery-2"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Highway")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {khersonData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery3"
                                    rel="fancybox-gallery-3"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Foundation slab")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {aksData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery4"
                                    rel="fancybox-gallery-4"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("FRP rod")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {lisnykyData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery5"
                                    rel="fancybox-gallery-5"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Piles")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {concretingData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery6"
                                    rel="fancybox-gallery-6"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("concrete")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {kyivData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery7"
                                    rel="fancybox-gallery-7"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Precinct territory")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {irpinData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery8"
                                    rel="fancybox-gallery-8"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Inspection in Irpin")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {overlapData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery9"
                                    rel="fancybox-gallery-9"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Monolithic overlap")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {zbvData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery10"
                                    rel="fancybox-gallery-10"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Composite concrete products")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {roadData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery11"
                                    rel="fancybox-gallery-11"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Road slabs")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {platesData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery12"
                                    rel="fancybox-gallery-12"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("NDIBK")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {kpiData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery13"
                                    rel="fancybox-gallery-13"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("KPI")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {seamsData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery14"
                                    rel="fancybox-gallery-14"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("seams")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {livanData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery15"
                                    rel="fancybox-gallery-15"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Lebanon")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {airportData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery16"
                                    rel="fancybox-gallery-16"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Vinnytsia Airport")}</h3>
                    </div>
                    <div className="projects__item">
                        <div className="projects__inner">
                            {minerData.map((projectItem) => (
                                <a
                                    className="projects__link"
                                    href={projectItem.src}
                                    data-fancybox="gallery17"
                                    rel="fancybox-gallery-17"
                                >
                                    <img src={projectItem.src} alt="" className="projects__img"/>
                                </a>
                            ))}
                        </div>
                        <h3 className="projects__heading">{t("Vatutine Stadium Shakhtar")}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
