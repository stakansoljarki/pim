import React from "react";
import { Carousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

import image1 from './images/1.jpeg'
import image2 from './images/2.jpeg'
import image3 from './images/3.jpeg'
import image4 from './images/4.jpeg'
import image5 from './images/5.jpeg'
import image6 from './images/6.jpeg'
import image7 from './images/7.jpeg'
import image8 from './images/8.jpeg'
import image9 from './images/9.jpeg'
import image10 from './images/10.jpeg'
import image11 from './images/11.jpeg'
import image12 from './images/12.jpeg'
import image13 from './images/13.jpeg'
import image14 from './images/14.jpeg'
import image15 from './images/15.jpeg'

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects__container">
                <h2 className="projects__title">Наші проекти</h2>
                <div className="projects__wrap">
                    <a
                        href={image1}
                        data-fancybox="gallery"
                    >
                        <img src={image1} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image2}
                        data-fancybox="gallery"
                    >
                        <img src={image2} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image3}
                        data-fancybox="gallery"
                    >
                        <img src={image3} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image4}
                        data-fancybox="gallery"
                    >
                        <img src={image4} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image5}
                        data-fancybox="gallery"
                    >
                        <img src={image5} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image6}
                        data-fancybox="gallery"
                    >
                        <img src={image6} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image7}
                        data-fancybox="gallery"
                    >
                        <img src={image7} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image8}
                        data-fancybox="gallery"
                    >
                        <img src={image8} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image9}
                        data-fancybox="gallery"
                    >
                        <img src={image9} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image10}
                        data-fancybox="gallery"
                    >
                        <img src={image10} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image11}
                        data-fancybox="gallery"
                    >
                        <img src={image11} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image12}
                        data-fancybox="gallery"
                    >
                        <img src={image12} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image13}
                        data-fancybox="gallery"
                    >
                        <img src={image13} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image14}
                        data-fancybox="gallery"
                    >
                        <img src={image14} alt="" className="projects__img"/>
                    </a>
                    <a
                        href={image15}
                        data-fancybox="gallery"
                    >
                        <img src={image15} alt="" className="projects__img"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;
