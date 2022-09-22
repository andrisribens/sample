import React from "react";

function Video() {

    return (
        <div className="video-block-content">
            <h3>Embed YouTube video</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.</p>
            <div className="video-responsive">
                <iframe 
                src="https://www.youtube-nocookie.com/embed/pZXxKpZPims" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default Video;