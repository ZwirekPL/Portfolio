import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
const VideoHeader = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { scrollY } = useScroll();
  const video1 = useTransform(scrollY, [0, 300], [0, 650]);
  const video2 = useTransform(scrollY, [0, 300], [0, -650]);
  if (isMobile) {
    return (
      <>
        <motion.video
          loop
          autoPlay
          muted
          className="h-[90vh] absolute -z-10 top-0 "
          style={{ translateX: video2 }}
        >
          <source src="/mix2.mp4" type="video/mp4" />
          {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </motion.video>
      </>
    );
  } else {
    return (
      <>
        <motion.video
          loop
          autoPlay
          muted
          className="h-[90vh] absolute -z-20 right-[170px] "
          style={{ translateX: video1 }}
        >
          <source src="/mix1.mp4" type="video/mp4" />
          {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
          loop
          autoPlay
          muted
          className="h-[90vh] absolute -z-10 left-[170px] "
          style={{ translateX: video2 }}
        >
          <source src="/mix2.mp4" type="video/mp4" />
          {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </motion.video>
      </>
    );
  }
};

export default VideoHeader;
