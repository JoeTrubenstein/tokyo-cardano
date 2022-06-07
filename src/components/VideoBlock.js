import React from "react";

const VideoBlock = () => {
    return (
        <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div className="relative z-10 text-2xl text-light-mode-leading bg-purple-300 bg-opacity-50 rounded-xl">
                Welcome to my site!
            </div>
            <video autoPlay loop muted className="absolute w-auto min-w-full h-screen max-w-none">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default VideoBlock