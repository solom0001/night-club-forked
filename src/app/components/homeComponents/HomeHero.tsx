"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
const HomeHero = () => {
  const windowVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2 } },
  };

  const textVariantOne: Variants = {
    flat: { rotateX: 90, opacity: 0 },
    block: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  const textVariantTwo: Variants = {
    up: { y: "-75%", opacity: 0 },
    down: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div variants={windowVariants} className="h-screen w-full overflow-hidden full-bleed grid items-center">
      <motion.div className="col-[1/2] row-[1/2] z-1 mx-auto grid gap-3 perspective-distant px-4">
        <motion.div variants={textVariantOne} initial="flat" animate="block" className=" relative z-20">
          <Image loading="eager" src={"/assets/HeroTitle.svg"} width={1000} height={170} alt={"hero logo"} className="w-[964px] mx-auto" />
        </motion.div>
        <motion.div variants={textVariantTwo} initial="up" animate="down" className="relative z-10 ">
          <Image loading="eager" src={"/assets/HeroUnderTitle.svg"} width={1000} height={170} alt={"hero logo"} className="" />
          <Image loading="eager" src={"/assets/bottom_line.png"} width={1000} height={170} alt={"hero logo"} className="mt-[-10px]" />
        </motion.div>
      </motion.div>
      <motion.div variants={windowVariants} initial="hidden" animate="show" className="w-full h-full col-[1/2] row-[1/2]">
        <Image loading="eager" src={"/assets/bg/header_bg_2.jpg"} width={1620} height={868} alt={"background"} className="w-full h-full object-center object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default HomeHero;
