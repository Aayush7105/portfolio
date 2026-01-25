import ChangingTextMotion from "@/components/ChangingTextMotion";
import { Themetoggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative overflow-hidden border border-dotted border-neutral-300/80">
      <div
        className="absolute inset-1 
    dark:bg-[radial-gradient(#ffffff1A_1px,transparent_1px)]
    bg-[radial-gradient(#00000014_1px,transparent_1px)]

    bg-size-[20px_20px] flex justify-center items-center"
      >
        <div className="relative h-screen w-5xl bg-neutral-100 dark:bg-neutral-950">
          <div
            className=" bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),
      linear-gradient(to_bottom,#0000000F_1px,transparent_1px)]
      border border-neutral-400/50
      dark:absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1A_1px,transparent_1px),linear-gradient(to_bottom,#8080801A_1px,transparent_1px)] bg-size-[14px_24px] flex justify-center items-center  dark:border-neutral-700/50"
          >
            <div className="min-h-screen  sm:w-[90%] md:w-[85%] border border-dashed border-neutral-600/40 dark:border-neutral-500/50 sm:py-16  ">
              <div className="border-b border-t border-dashed border-neutral-600/40 dark:border-neutral-500/50 flex justify-between sm:flex-row">
                <div className="w-[50%] flex">
                  <div className="sm:w-[35%] border-r border-dashed border-neutral-500/50">
                    <Image
                      src={"/images.jpeg"}
                      alt="sjx"
                      quality={80}
                      height={200}
                      width={200}
                      className=" h-full rounded-full w-full border border-neutral-500/60 p-1"
                    />
                  </div>
                  <div className="pt-15 px-3">
                    <h1 className="font-mono  text-4xl text-neutral-800 dark:text-neutral-300 tracking-tighter border border-dashed border-neutral-600/40 dark:border-white/20 p-2">
                      Aayush Rawat
                    </h1>
                    <div className="flex gap-2">
                      <p className="font-mono mt-2 text-sm text-neutral-800 dark:text-neutral-500">
                        21 .
                      </p>
                      <ChangingTextMotion />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <Themetoggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
