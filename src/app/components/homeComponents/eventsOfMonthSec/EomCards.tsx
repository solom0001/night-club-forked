"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type CardProps={
desc:string;
date:string;
location:string;
time:string;
title:string;
}

const EomCard = ({desc,time,location,title,date}:CardProps) => {
  const myVariants = {
    rest: { opacity: 1, y: 0 },
    hiddenDown: { opacity: 0, y: 100 },
    hiddenUp: { opacity: 0, y: -100 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div variants={myVariants} initial="rest" whileHover="hover" className=" grid grid-rows-[minmax(0,400px)_0.2fr] overflow-hidden">
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:row-span-full [&>*]:col-span-full  ">
        <motion.div
          variants={myVariants}
          initial="hiddenDown"
          whileHover="hover"
          className="
        grid grid-rows-[1fr_0.75fr]

        "
        >
          <motion.span
            variants={myVariants}
            initial="hiddenUp"
            whileHover="hover"
            className="flex w-full h-full items-center
          before:content-[''] before:absolute before:w-[50px] before:h-[150px] before:bg-(--red) before:top-[-40] before:left-[-25] relative before:rotate-45
          "
          >
            <a className="px-4 py-2 mx-auto bg-(--red) text-(--white)" href="#">
              Book Now
            </a>
          </motion.span>
          <span className="flex flex-col p-4 bg-background/90">
            <h2 className="">{title}</h2>
            <p>
                {desc}
            </p>
             </span>
        </motion.div>
        <div>
          <Image src="/assets/bg/footerbg.jpg" alt="event of month" width={400} height={400} className="w-full h-full object-cover" />
        </div>
      </div>
      <span className="bg-(--red) p-4">
        <ul className="flex flex-nowrap ml-auto gap-4 list-none">
          <li>{date}</li>
          <li>{time}</li>
          <li>{location}</li>
        </ul>
      </span>
    </motion.div>

    // <div className="grid grid-cols-2 grid-rows-[minmax(0,300px)_0.5fr] gap-4 [&>*]:grid  [&>*]:gap-0 [&>*]:row-span-full [&>*]:grid-rows-subgrid ">
    //   <motion.div className="[&>*]:col-start-1 ">
    //     <div>
    //       <Image src="/assets/bg/footerbg.jpg" alt="event of month" width={400} height={400} className="w-full h-full object-cover" />
    //     </div>
    //     <span className="bg-(--red) p-4">
    //       <ul className="flex flex-nowrap ml-auto gap-4 list-none">
    //         <li>25 Dec</li>
    //         <li>10:30 PM </li>
    //         <li>City Plaza,New York</li>
    //       </ul>
    //     </span>
    //   </motion.div>
    //   <motion.div className=" overflow-hidden">
    //     <div className="grid grid-cols-1 grid-rows-1 [&>*]:row-span-full  ">
    //       <div
    //         className="
    //     before:content-[''] before:absolute before:w-[50px] before:h-[150px] before:bg-(--red) before:top-[-40] before:left-[-25] relative before:rotate-45
    //     grid grid-rows-[1fr_0.75fr] max-h-full

    //     "
    //       >
    //         <span className="flex w-full h-full items-center">
    //           <a className="px-4 py-2 mx-auto text-(--white)" href="#">
    //             Book Now
    //           </a>
    //         </span>
    //         <span className="flex flex-nowrap flex-row">
    //           <h2 className="p-4 bg-[var(--background)/0.5]">Night Club</h2>
    //           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    //         </span>
    //       </div>
    //       <div>
    //         <Image src="/assets/bg/footerbg.jpg" alt="event of month" width={400} height={400} className="w-full h-full object-cover" />
    //       </div>
    //     </div>
    //     <span className="bg-(--red) p-4">
    //       <ul className="flex flex-nowrap ml-auto gap-4 list-none">
    //         <li>25 Dec</li>
    //         <li>10:30 PM </li>
    //         <li>City Plaza,New York</li>
    //       </ul>
    //     </span>
    //   </motion.div>
    // </div>
  );
};

export default EomCard;
