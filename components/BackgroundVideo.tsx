import React from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={src} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-foreground"></div>
      </video>
      {/* Optional overlay for text readability */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[0.5px]"></div>
    </div>
  );
};

export default BackgroundVideo;
