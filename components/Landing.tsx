import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className=" h-full w-full max-w-5xl flex justify-center items-center  bg-white dark:bg-neutral-950  ">
      <div
        className=" h-full bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),
              linear-gradient(to_bottom,#0000000F_1px,transparent_1px)]
              ring ring-neutral-400/60
              dark:h-full dark: bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1A_1px,transparent_1px),linear-gradient(to_bottom,#8080801A_1px,transparent_1px)] bg-size-[14px_24px] dark:ring-neutral-700/50 flex justify-center items-center"
      >
        <div className="h-full sm:w-[90%] md:w-[85%] ring ring-dashed ring-neutral-600/40 dark:ring-neutral-500/50 sm:py-16  flex flex-col ">
          <Hero />
          <Aboutme />
          <Contactme />
        </div>
      </div>
    </div>
  );
};

export default Landing;
