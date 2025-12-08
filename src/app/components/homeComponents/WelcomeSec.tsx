"use client";

import Image from "next/image";

const WelcomeSec = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-full ">
      <div className="relative w-full aspect-[3/4]">
        <Image src="/assets/wlmeP1png.png" alt="logo" fill className="object-cover" />
      </div>
      <div className="relative w-full aspect-[3/4]">
        <Image src="/assets/wlcmP2.png" alt="logo" fill className="object-cover" />
      </div>
      <div className="relative w-full aspect-[3/4]">
        <Image src="/assets/wlcmP3.png" alt="logo" fill className="object-cover" />
      </div>
    </div>
  );
};

export default WelcomeSec;
