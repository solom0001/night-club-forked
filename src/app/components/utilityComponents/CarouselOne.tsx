"use client";
import { ReactNode, useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Slide = {
  id: number;
  element: ReactNode;
};

type CarouselProps = {
  slides: Slide[];
  pushStyle?: string;
};

const CarouselOne = ({ slides, pushStyle }: CarouselProps) => {
  let [isCurrent, setCurrent] = useState(0);
  const [isInteracted, setInteracted] = useState(false);

  const handleSlide = (i: number) => {
    if (isCurrent === i) return;
    setCurrent(i);
  };

  // setInterval(() => {
  //   for (let i = 0; i <= slides.length; i++) {
  //     setCurrent(isCurrent + 1);
  //   }
  // }, 5000);
  // console.log("Current index:", isCurrent);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const conIsInView = useInView(containerRef, { once: true });

  // useEffect(() => {
  //   if (!isInView || isInteracted) return;

  //   const intervalId = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [isInView, isInteracted, slides.length]);

  // const carouselTimer=()=> {
  //   if (!isInView || isInteracted) return;

  //   const intervalId = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }

  useEffect(() => {
    if (!conIsInView || isInteracted) return;

    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [conIsInView, isInteracted]);

  //---- mobile carousel----->

  const onScroll = () => {
    if (!ref.current) return; //hvis denne div ikke eksistere i dom enndu, gør intet!
    const { scrollLeft, clientWidth } = ref.current; //destrukturer ref.current og får dens width, og hvor mange pixels fra venstre man er scrollet på en overflow
    const index = Math.round(scrollLeft / clientWidth);
    if (index === isCurrent) {
      return;
    }
    setCurrent(index);
    setInteracted(true);
  };

  const scrollToSlide = (index: number) => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: index * ref.current.clientWidth, //hvor mange px skal der scrolles fra venstre
      behavior: "smooth",
    });
    setCurrent(index);
    setInteracted(true);
  };

  // useEffect(() => {
  //   if (isInteracted) return;
  //   const interval = setInterval(() => {
  //     if (!ref.current) return;
  //     const nextIndex = (isCurrent + 1) % slides.length;
  //     ref.current.scrollTo({
  //       left: nextIndex * ref.current.clientWidth,
  //       behavior: "smooth",
  //     });
  //     setCurrent(nextIndex);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isCurrent, isInteracted, slides.length]);

  return (
    <motion.div ref={containerRef} className={`items-center gap-4 h-[670px] flex-col justify-between w-full relative ${pushStyle}`}>
      {/* -----carousel------ */}

      <div onMouseEnter={() => setInteracted(true)} onMouseLeave={() => setInteracted(false)} className="w-full h-full relative hidden lg:flex flex-5 flex-row overflow-hidden! ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full flex items-center 
          absolute inset-0 transition-transform duration-500 ${index === isCurrent ? "translate-x-0" : index < isCurrent ? "-translate-x-full" : "translate-x-full"}
          `}
          >
            {slide.element}
          </div>
        ))}
      </div>

      {/*--- mobile ---*/}

      <div ref={ref} onScroll={onScroll} className="w-full h-full relative lg:hidden flex flex-5 flex-row overflow-x-auto snap-x snap-mandatory ">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`w-full h-full flex items-center snap-center shrink-0`}>
            {slide.element}
          </div>
        ))}
      </div>

      {/* -----contntroller boxes------ */}

      <div className=" hidden md:flex w-fit mx-auto [&>*]:min-w-4 [&>*]:bg-(--white) [&>*]:hover:scale-105 [&>*]:hover:cursor-pointer transition-all ease-in-out duration-100 gap-5 flex-1 items-center flex-nowrap mt-4">
        {slides.map((e, i) => (
          <div
            key={e.id}
            onClick={() => {
              handleSlide(i);
              setInteracted(true);
              scrollToSlide(i);
            }}
            className={`w-6 h-6  ${i === isCurrent ? "bg-(--red)! h-5!" : ""}`}
          ></div>
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselOne;

// import { div } from "framer-motion/client";
// import Image from "next/image";
// import { ReactNode, useState } from "react";

// type CarouselProps = {
//   slot1: React.ReactNode;
//   slot2: React.ReactNode;
//   slot3: React.ReactNode;
//   pushStyle?: string;
// };

// const CarouselOne = ({ slot1, slot2, slot3, pushStyle }: CarouselProps) => {
//   const [currentImg, setCurrentImg] = useState<string>("secondImg");

//   const handleCarousel = (id: number) => {
//     if (id === 1) {
//       setCurrentImg("firstImg");
//     } else if (id === 2) {
//       setCurrentImg("secondImg");
//     } else if (id === 3) {
//       setCurrentImg("thirdImg");
//     }
//   };
//   return (
//     <div className={`items-center h-[400px] md:h-[500px] lg:h-[550px] w-full gap-8 flex flex-col relative ${pushStyle}`}>
//       <div className="overflow-hidden w-full  aspect-[2/1] [&>*]:h-full [&>*]:w-full relative ">
//         <div
//           className={`absolute inset-0 transition-transform  duration-500
//             ${currentImg === "firstImg" ? "translate-x-0" : "-translate-x-full"} `}
//         >
//           {slot1}
//         </div>
//         <div
//           className={`absolute inset-0 transition-transform duration-500
//             ${currentImg === "secondImg" ? "translate-x-0" : currentImg === "firstImg" ? "translate-x-full" : "-translate-x-full"}`}
//         >
//           {slot2}
//         </div>
//         <div
//           className={`absolute inset-0 transition-transform duration-500
//             ${currentImg === "thirdImg" ? "translate-x-0" : "translate-x-full"}`}
//         >
//           {slot3}
//         </div>
//       </div>

//       <div className="max-w-[120px] justify-between [&>*]:aspect-square [&>*]:min-w-4 [&>*]:bg-(--white) [&>*]:hover:scale-105 [&>*]:hover:cursor-pointer transition-all ease-in-out duration-100 gap-5 flex flex-nowrap">
//         <div onClick={() => handleCarousel(1)} className={`${currentImg === "firstImg" ? "bg-(--red)!" : ""}`}></div>
//         <div onClick={() => handleCarousel(2)} className={`${currentImg === "secondImg" ? "bg-(--red)!" : ""}`}></div>
//         <div onClick={() => handleCarousel(3)} className={`${currentImg === "thirdImg" ? "bg-(--red)!" : ""}`}></div>
//       </div>
//     </div>
//   );
// };
