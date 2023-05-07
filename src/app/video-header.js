import React from "react";

const VideoHeader = () => {
  return (
    <>
      <video loop autoPlay muted className="h-[90vh] absolute -z-20 right-0 ">
        <source src="/mix1.mp4" type="video/mp4" />
        {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
      <video loop autoPlay muted className="h-[90vh] absolute -z-10 left-0 ">
        <source src="/mix2.mp4" type="video/mp4" />
        {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoHeader;
