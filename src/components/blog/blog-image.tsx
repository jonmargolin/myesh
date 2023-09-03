import { useRef } from 'react';

const BlogImage = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Start playing the video
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video
        }
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className="rounded-t-blog " src="https://www.esh.com/assets/card-vid.e4092562.mp4" loop muted preload="metadata" />
        </div>
    );
};

export default BlogImage;
