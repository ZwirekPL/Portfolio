import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
const VideoHeader = () => {
  const isOneVideo = useMediaQuery("(max-width: 1023px)");
  const { scrollY } = useScroll();
  const video1 = useTransform(scrollY, [0, 300], [0, 650]);
  const video2 = useTransform(scrollY, [0, 300], [0, -650]);
  if (isOneVideo) {
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
          className="h-[90vh]  lg:max-w-[560px] xl:max-h-[720px] absolute -z-10 right-[150px] lg:right-[70px] xl:right-[200px] 2xl:right-[350px]"
          style={{ translateX: video1 }}
        >
          <source src="/mix1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
          loop
          autoPlay
          muted
          className="h-[90vh] lg:max-w-[560px] xl:max-h-[720px] absolute -z-10 left-[150px] lg:left-[70px] xl:left-[200px] 2xl:left-[350px] "
          style={{ translateX: video2 }}
        >
          <source src="/mix2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </>
    );
  }
};

export default VideoHeader;
