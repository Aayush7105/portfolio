import Image from "next/image";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <h1 className="mx-auto max-w-3xl bg-linear-to-br from-red-300 via-neutral-300 via-50% to-red-300/30 bg-clip-text py-2 text-center text-5xl leading-relaxed font-medium tracking-tighter text-balance text-transparent md:text-6xl filter: blur(0px); opacity: 1; transform: none;">
    //     <span className="block leading-[1.1]">Design Bold.</span>
    //     <span class="block leading-[1.1]">Ship Seamless.</span>
    //   </h1>
    // </div>
    <div className="min-h-screen bg-black relative overflow-hidden border border-dotted border-neutral-700/80">
      <div
        className="absolute inset-1 
    bg-[radial-gradient(#ffffff1A_1px,transparent_1px)]
    bg-size-[20px_20px] flex justify-center items-center"
      >
        <div className="relative h-screen w-5xl  bg-neutral-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1A_1px,transparent_1px),linear-gradient(to_bottom,#8080801A_1px,transparent_1px)] bg-size-[14px_24px] flex justify-center items-center border border-neutral-800/50">
            <div className="h-screen bg-black w-[85%] border border-dashed border-neutral-600/50 py-16  ">
              <div className="bg-black border-b border-t border-dashed border-neutral-600/50 flex">
                <div className="w-[20%] border-r border-dashed border-neutral-600/50 ">
                  <Image
                    src={"/images.jpeg"}
                    alt="sjx"
                    quality={80}
                    height={500}
                    width={500}
                    className=" h-full rounded-full w-full border border-neutral-700/60 p-1"
                  />
                </div>
                <div className="">
                  <h1 className="font-semibold text-5xl ">Aayush</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
