import React from "react";
import Image from "next/image";
import { px } from "framer-motion";

const Techstack = () => {
  return (
    <div className="flex flex-col px-2 py-5 md:px-8 md:py-5 border-y border-dashed border-neutral-500/40 dark:border-neutral-500/50 ">
      <h1 className="text-primary text-[22px] font-medium tracking-tighter font-mono mb-4">
        TechStack
      </h1>
      <div className="flex flex-row gap-2 pb-1">
        <Image
          src={"/typescript.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
        <Image
          src={"/javascript.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
        <Image
          src={"/html.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
        <Image
          src={"/css.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" -mx-1  rounded-sm"
        />
        <Image
          src={"/react.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
        <Image
          src={"/nextjs.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
        <Image
          src={"/tailwind.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
        <div className="bg-[rgb(255,243,18)] p-1 rounded-sm border">
          <Image src="/Motionlogo.svg" alt="sjx" height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
