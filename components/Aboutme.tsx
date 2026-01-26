import React from "react";

const Aboutme = () => {
  return (
    <div className="w-full border-b border-dashed border-neutral-600/60 text-[13px] text-pretty text-justify font-mono flex flex-col gap-5 tracking-wide  p-12 text-neutral-700 dark:text-neutral-300/70 dark:border-neutral-500/50">
      <p>
        I’m a{" "}
        <span className="font-bold text-neutral-700 dark:text-neutral-300">
          Full Stack Developer{" "}
        </span>
        who enjoys building clean, fast, and intuitive digital experiences. I
        focus on crafting interfaces that feel effortless to use while staying
        performant and reliable under the hood. From responsive layouts to
        interactive components, I care deeply about details that make products
        enjoyable, not just functional. While frontend is where ideas come to
        life, I work across the full stack to turn concepts into real, usable
        applications.
      </p>

      <p>
        I build projects from scratch, design backend logic, and connect
        everything into smooth, end-to-end systems. I enjoy working with
        structured data, scalable APIs, and clean architecture just as much as
        designing polished UIs.
      </p>
      <p>
        I like experimenting with small product ideas, launching side projects,
        and continuously refining them based on usability and performance.
        Learning by building is a core part of my process—I break things, fix
        them, and make them better each time. Whether it’s a dashboard, a tool,
        or a SaaS-style application, my goal is always the same: build products
        that are practical, well-designed, and genuinely useful for the people
        who use them.
      </p>
    </div>
  );
};

export default Aboutme;
