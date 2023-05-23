import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const TimeLine = () => {
  const { scrollY } = useScroll();
  const timeLineScrollingX = useTransform(scrollY, [2100, 2700], [300, -800]);
  return (
    <motion.div
      className="flex flex-col justify-center items-start translate-x-[300px] relative overflow-x-hidden mt-20"
      style={{
        translateX: timeLineScrollingX,
      }}
    >
      <div className="flex flex-row flex-nowrap my-8">
        <div className="flex flex-row ml-20 hover:cursor-pointer">
          <div>
            <Image src="/MIP.png" width={200} height={200} alt="" />
          </div>
          <div className="ml-3">
            <p className=" font-semibold text-lg ">Driver/Cook</p>
            <p className="text-sm my-2">Maleństwo i Przyjaciele</p>
            <div>
              <div>
                <p className="font-extralight text-sm">2022r-2023r.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-20 hover:cursor-pointer">
          <div>
            <Image src="/KL.png" width={200} height={200} alt="" />
          </div>
          <div className="ml-3">
            <p className=" font-semibold text-lg ">Detalier</p>
            <p className="text-sm my-2">Klinika Lakieru Warszawa</p>
            <div>
              <div>
                <p className="font-extralight text-sm">2022r-2022r.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-20 hover:cursor-pointer">
          <div>
            <Image src="/ADBL.png" width={200} height={200} alt="" />
          </div>
          <div className="ml-3">
            <p className=" font-semibold text-lg ">R&D Specjalist</p>
            <p className="text-sm my-2">ADBL</p>
            <div>
              <div>
                <p className="font-extralight text-sm">2018r-2021r.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-20 hover:cursor-pointer">
          <div>
            <Image src="/MIP.png" width={200} height={200} alt="" />
          </div>
          <div className="ml-3">
            <p className=" font-semibold text-lg ">Detalier</p>
            <p className="text-sm my-2">Autoklinika</p>
            <div>
              <div>
                <p className="font-extralight text-sm">2016r-2017r.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-20 hover:cursor-pointer">
          <div>
            <Image src="/LM.png" width={200} height={200} alt="" />
          </div>
          <div className="ml-3">
            <p className=" font-semibold text-lg ">Customer Advisor</p>
            <p className="text-sm my-2">Leroy Merlin Polska</p>
            <div>
              <div>
                <p className="font-extralight text-sm">2014r-2016r.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeLine;
