import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Github from "./github";
import Hero from "./Hero";
import Projects from "./Project";
import Techstack from "./techstack";

const Landing = () => {
  return (
    <div className="mx-auto max-w-3xl flex justify-center flex-col bg-white dark:bg-neutral-950  border-x  border-dashed py-16 ">
      <Hero />
      <Aboutme />
      <Contactme />
      <Projects />
      <Github />
      <Techstack />
    </div>
  );
};

export default Landing;
