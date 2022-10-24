import React from "react";

const Video = () => {
    return (
        <section className="video">
            <div className="video__container">
                <iframe className="video__video" src="https://www.youtube.com/embed/xbzvXbdXmSI"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}

export default Video;
