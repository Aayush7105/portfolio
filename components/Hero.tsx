"use client";
import ChangingTextMotion from "@/components/ChangingTextMotion";
import { Themetoggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="md:hidden border-b border-t border-dashed border-neutral-600/40 dark:border-neutral-500/50 px-2 py-2">
        {/* Toggle on top right for mobile */}
        <div className="flex justify-end mb-2">
          <Themetoggle />
        </div>

        {/* Image on left, Name and details on right in one line for mobile */}
        <div className="flex items-center gap-2 w-full">
          <div className="w-24 h-24 shrink-0 flex-none">
            <Image
              src={"/images.jpeg"}
              alt="sjx"
              height={56}
              width={56}
              className="h-full rounded-full w-full border border-neutral-500/60 p-0.5 object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center min-w-0">
            <h1 className="font-semibold font-mono text-3xl text-neutral-800 dark:text-neutral-300 tracking-tighter dark:border-white/20 px-1.5 py-0.5 leading-tight">
              Aayush Rawat
            </h1>
            <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
              <p className="font-mono text-xs text-neutral-800 dark:text-neutral-500">
                21
              </p>
              <FaDiamond className="size-0.5 fill-neutral-600 dark:fill-neutral-400" />
              <div className="text-xs">
                <ChangingTextMotion />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex border-b border-t border-dashed border-neutral-600/40 dark:border-neutral-500/50 justify-between">
        <div className="w-[50%] flex">
          <div
            className="sm:w-[25%] border-r border-dashed border-neutral-500/50 flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative"
              style={{
                width: 100,
                height: 100,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* front */}
              <div
                className="absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src={"/pfp1.jpeg"}
                  alt="sjx"
                  height={120}
                  width={120}
                  className="rounded-full border border-neutral-500/60 p-1 object-cover"
                />
              </div>

              {/* back */}
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  src={"/pfp2.jpeg"}
                  alt="sjx"
                  height={120}
                  width={120}
                  className="rounded-full border border-neutral-500/60 p-1 object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="pt-3 px-3 flex flex-col ">
            <h1 className="font-semibold font-mono text-4xl text-neutral-800 dark:text-neutral-300 tracking-tighter border-neutral-600/40 dark:border-white/20 p-2">
              Aayush Rawat
            </h1>
            <div className="px-1 flex gap-2 -mt-2">
              <p className="font-mono mt-2 text-sm text-neutral-800 dark:text-neutral-500">
                21
              </p>
              <FaDiamond className="size-1.5 mt-3.5 fill-neutral-600 dark:fill-neutral-400" />
              <ChangingTextMotion />
            </div>
          </div>
        </div>
        <div className="p-2">
          <Themetoggle />
        </div>
      </div>
    </>
  );
};

export default Hero;
