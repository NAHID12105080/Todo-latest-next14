"use client";

import React, { memo } from "react";

const VideoBackground = memo(function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-300 "
    >
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});

export default VideoBackground;
