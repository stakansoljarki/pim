import React from "react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

import lvivData from "./constants";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h2 className="projects__title">Наші проєкти</h2>
                <div className="projects__wrap">
                    <div className="projects__item">
                        <h3 className="projects__heading">Трамвайні колії, м.Львів</h3>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
