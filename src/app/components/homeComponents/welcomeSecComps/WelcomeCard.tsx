"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type WelcomeProps = {
  title: string;
  backgroundImg: string;
  desc: string;
  icon: React.ReactNode;
};

const WelcomeCard = ({ title, backgroundImg, desc, icon }: WelcomeProps) => {
  const parentVariants: Variants = {
    rest: {},
    hover: {},
  };

  const topVariants: Variants = {
    rest: { opacity: 0, y: -100 },
    hover: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
  };

  const bottomVariants: Variants = {
    rest: { opacity: 0, y: 100 },
    hover: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
  };
  const textVariants: Variants = {
    rest: { opacity: 0, x: 100 },
    hover: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } },
  };
  const titleVariants: Variants = {
    rest: { opacity: 0, scale: 0.5 },
    hover: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } },
  };
  const iconVariants: Variants = {
    rest: { opacity: 0, scale: 0.5 },
    hover: { opacity: 1, scale: 1, transition: { ease: "easeInOut" } },
  };

  return (
    <div
      className="grid grid-cols-1 grid-rows-1 w-full aspect-3/4 *:col-start-1 *:row-start-1 overflow-hidden hover:cursor-default
    "
    >
      {/* billede layer--------------------------------------------------*/}
      <div className="relative z-10">
        <Image src={backgroundImg} alt="logo" fill className="object-cover" />
      </div>

      {/* Tekst layer--------------------------------------------------*/}
      <motion.div
        variants={parentVariants}
        initial="rest"
        whileHover="hover"
        className="grid w-full h-full items-center relative z-15 grid-rows-[0.5fr_1fr_1fr_0.5fr] hover:border-b hover:border-t transition-hover duration-150 ease-in-out border-(--red) after:content-[''] after:absolute after:inset-0 after:w-full after:h-full 
        after:bg-black/0 after:pointer-events-none hover:after:bg-black/95 after:z-15 *:relative *:z-20">
        <motion.div
          variants={topVariants}
          className="flex flex-col w-full h-full before:content-[''] before:absolute before:w-[120px] before:h-[200px] before:bg-(--red) before:top-[-120px] 
          before:left-[-75] before:rotate-45 justify-end
        "
        ></motion.div>

        {/* Ikon and header----->*/}
        <div className="flex flex-col w-full h-full items-center justify-end">
          <motion.div variants={iconVariants} className="w-[30%] aspect-square! border-2 border-(--red) rounded p-6">
            
            {icon}
          </motion.div>
          <motion.h2 className="uppercase" variants={titleVariants}>
            {title}
          </motion.h2>
        </div>

        {/* text----->*/}
        <motion.div variants={textVariants} className=" mx-auto text-center p-4">
          <p>{desc}</p>
        </motion.div>

        {/* bottom elm----->*/}
        <motion.div variants={bottomVariants} className="before:content-[''] before:absolute before:w-[50px] before:h-[150px] before:bg-(--red) before:bottom-[-95px]  before:right-[-25]  before:rotate-45 "></motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeCard;
