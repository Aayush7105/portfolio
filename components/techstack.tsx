import React from "react";
import Image from "next/image";
import { px } from "framer-motion";

const Techstack = () => {
  return (
    <div className="flex flex-col px-7 py-7 border-y">
      <h1 className="text-primary text-xl font-medium tracking-tighter font-mono mb-5">
        TechStack
      </h1>
      <div className="flex flex-row gap-2 ">
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
          src={"/python.svg"}
          alt="sjx"
          height={40}
          width={40}
          className=" rounded-sm"
        />
      </div>
    </div>
  );
};

export default Techstack;
