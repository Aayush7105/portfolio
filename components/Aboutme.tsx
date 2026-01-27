import React from "react";

const AboutMe = () => (
  <article className="border-b border-dashed border-neutral-600/60 dark:border-neutral-500/50 px-6 py-8 font-mono text-sm tracking-wide text-neutral-700 dark:text-neutral-400/70 sm:px-8 sm:py-10 md:px-12">
    <p className="mb-5 text-pretty">
      I’m a{" "}
      <strong className="text-neutral-800 dark:text-neutral-200">
        Full-Stack Developer
      </strong>{" "}
      who enjoys building clean, fast, and intuitive digital experiences. I
      focus on crafting interfaces that feel effortless while staying performant
      and reliable under the hood. From responsive layouts to interactive
      components, I care about details that make products enjoyable, not just
      functional. While frontend is where ideas come to life, I work across the
      stack to turn concepts into real, usable applications.
    </p>
  </article>
);

export default AboutMe;
