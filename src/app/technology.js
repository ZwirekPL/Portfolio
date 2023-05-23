import Image from "next/image";
import styles from "./style/styles.module.css";

const Technology = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">My Skills</h1>
      <div className="w-full flex justify-center align-center relative">
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
      </div>
      <div className="flex flex-row flex-wrap w-full"></div>
    </div>
  );
};

export default Technology;
