"use client";
import Image from "next/image";
import { Children } from "react";

type RecentProps = {
  desc: string;

  children: React.ReactNode;
};

const Recents = ({ desc, children }: RecentProps) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="grid grid-cols-[minmax(0,65px)_3fr] gap-4">
      <div className="aspect-square w-auto">{children}</div>
      <div>
        <p>{desc}</p>
        <p className="text-xs text-(--red)">{currentDate}</p>
      </div>
    </div>
  );
};

export default Recents;
