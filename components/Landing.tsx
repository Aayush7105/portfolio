import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Hero from "./Hero";
import Projects from "./Project";

const Landing = () => {
  return (
    <div className=" h-full w-full max-w-5xl flex justify-center items-center  bg-white dark:bg-neutral-950  ">
      <div className="h-full sm:w-[90%] md:w-[85%] ring ring-dashed ring-neutral-500/40    dark:ring-neutral-500/50 sm:py-16  flex flex-col ">
        <Hero />
        <Aboutme />
        <Contactme />
        <Projects />
      </div>
    </div>
  );
};

export default Landing;
