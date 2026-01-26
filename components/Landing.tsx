import Aboutme from "./Aboutme";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="min-h-screen sm:w-[90%] md:w-[85%] border border-dashed border-neutral-600/40 dark:border-neutral-500/50 sm:py-16 flex flex-col">
      {/* Mobile Layout */}
      <Hero />
      <Aboutme />
    </div>
  );
};

export default Landing;
