"use client";

import Link from "next/link";
import { useState } from "react";

const HomeMenu = () => {
  const [hidden, setHidden] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  const menu = ["events", "gallery", "music", "video", "profils", "blog"];

  const toggleMenu = () => {
    if (hidden) {
      setIsRendered(true);
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <div
      role="navigation"
      className="w-[80px] hidden xl:sticky xl:top-50 mt-[10rem] ml-auto mr-8 2xl:block z-100 col-3! row-span-3"
    >
      <h1
        onClick={toggleMenu}
        className={`${
          hidden ? "" : "rotate-45"
        } text-center text-[45px]! text-(--red) bold text-shadow-[0_0_7px_black] hover:text-white transition-all duration-200 ease-in`}
      >
        +
      </h1>

      <ul
        onAnimationEnd={() => {
          if (hidden) {
            setIsRendered(false);
          }
        }}
        className={`
          ${hidden ? "slide-out" : "slide-in"}
          ${!isRendered ? "hidden" : ""}
          flex flex-col text-center [&>*]:text-(--red)
        `}
      >
        <li>
          <Link href="#welcome">
            <p className="bold text-shadow-[0_0_7px_black] hover:text-white hover:scale-[1.1] transition-all duration-200 ease-in">
              WELCOME
            </p>
          </Link>
        </li>

        {menu.map((n) => (
          <li key={n}>
            <span className="block shadow-[0_0_7px_black] bg-(--red) h-8 w-[2px] mx-auto my-4"></span>
            <Link href={`#${n}`}>
              <p className="bold text-shadow-[0_0_7px_black] uppercase hover:text-white hover:scale-[1.1] transition-all duration-200 ease-in">
                {n}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeMenu;
