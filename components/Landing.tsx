import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Container from "./container";
import Footer from "./footer";
import Github from "./github";
import Hero from "./Hero";
import Projects from "./Project";
import Techstack from "./techstack";

const Landing = () => {
  return (
    <div className="mx-auto max-w-2xl flex justify-center flex-col bg-white dark:bg-neutral-950  border-x  border-dashed border-neutral-500/40 dark:border-neutral-700/50 py-20 ">
      <Container>
        <Hero />
        <Aboutme />
        <Contactme />
        <Projects />
        <Github />
        <Techstack />
        <Footer />
      </Container>
    </div>
  );
};

export default Landing;
