import React from "react";

import video from "./images/1.mp4"
import image from "./images/1.png"

const Video = () => {
    return (
        <section className="video">
            <div className="video__container">
                <video className="video__video" src={video} controls poster={image}/>
            </div>
        </section>
    )
}

export default Video;
