import Image from "next/image";
import styles from "./style/styles.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Technology = () => {
  const { scrollY } = useScroll();
  const aboutTechnology = useTransform(scrollY, [300, 550], [600, 0]);
  const aboutTechnologyY = useTransform(scrollY, [650, 800], [0, 180]);
  return (
    <motion.div
      className="w-[50%] h-[100%] flex justify-center align-center relative"
      style={{
        translateX: aboutTechnology,
        translateY: aboutTechnologyY,
      }}
    >
      <Image src="/me.png" width={400} height={400} alt="" />
      <Image
        src="/react-router.png"
        width={70}
        height={70}
        alt=""
        className={styles.reactr}
      />
      <Image
        src="/react.png"
        width={70}
        height={70}
        alt=""
        className={styles.react}
      />
      <Image
        src="/html5.png"
        width={70}
        height={70}
        alt=""
        className={styles.html}
      />
      <Image
        src="/js.png"
        width={70}
        height={70}
        alt=""
        className={styles.js}
      />
      <Image
        src="/bootstrap.png"
        width={70}
        height={70}
        alt=""
        className={styles.bootstrap}
      />
      <Image
        src="/css.png"
        width={70}
        height={70}
        alt=""
        className={styles.css}
      />
      <Image
        src="/sass.png"
        width={70}
        height={70}
        alt=""
        className={styles.sass}
      />
      <Image
        src="/tailwind.png"
        width={70}
        height={70}
        alt=""
        className={styles.tailwind}
      />{" "}
      <Image
        src="/auth0.png"
        width={70}
        height={70}
        alt=""
        className={styles.auth0}
      />
      <Image
        src="/express.png"
        width={70}
        height={70}
        alt=""
        className={styles.express}
      />
      <Image
        src="/mongo.png"
        width={70}
        height={70}
        alt=""
        className={styles.mongo}
      />
      <Image
        src="/nextjs.png"
        width={70}
        height={70}
        alt=""
        className={styles.nextjs}
      />
      <Image
        src="/node.png"
        width={70}
        height={70}
        alt=""
        className={styles.node}
      />
    </motion.div>
  );
};

export default Technology;
