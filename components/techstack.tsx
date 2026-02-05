import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Techstack = () => {
  const techs = [
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      src: "/logos/typescript.svg",
      size: 36,
    },
    {
      name: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "/logos/javascript.svg",
      size: 36,
    },
    {
      name: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      src: "/logos/html.svg",
      size: 36,
    },
    {
      name: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      src: "/logos/css.svg",
      size: 36,
    },
    {
      name: "React",
      href: "https://react.dev/learn",
      src: "/logos/react.svg",
      size: 36,
    },
    {
      name: "Node.js",
      href: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
      src: "/logos/nodejs-icon.svg",
      size: 36,
    },
    {
      name: "Express",
      href: "https://expressjs.com/en/starter/installing.html",
      src: "/logos/Express.svg",
      size: 36,
      rounded: true,
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      src: "/logos/nextjs.svg",
      size: 36,
    },
    {
      name: "Vite",
      href: "https://vite.dev/",
      src: "/logos/vite.svg",
      size: 36,
    },
    {
      name: "Tailwind CSS",
      href: "https://tailwindcss.com/docs/installation/using-vite",
      src: "/logos/tailwind.svg",
      size: 36,
    },
    {
      name: "Framer Motion",
      href: "https://motion.dev/",
      src: "/logos/Motionlogo.svg",
      size: 32,
      isMotion: true,
    },
    {
      name: "Git",
      href: "https://git-scm.com/",
      src: "/logos/git.svg",
      size: 36,
    },
    {
      name: "Python",
      href: "https://www.python.org/about/gettingstarted/",
      src: "/logos/python.svg",
      size: 36,
    },
    {
      name: "Java",
      href: "https://docs.oracle.com/en/java/",
      src: "/logos/java.svg",
      size: 36,
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/docs/",
      src: "/logos/mongo.svg",
      size: 36,
      rounded: true,
    },
    {
      name: "MySQL",
      href: "https://dev.mysql.com/doc/mysql-getting-started/en/",
      src: "/logos/mysql-icon.svg",
      size: 36,
      padded: true,
    },
  ];

  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <div className="flex flex-col px-5 py-7 md:px-7 md:py-8 border-b border-dashed border-neutral-500/40 dark:border-neutral-700/50">
        <p className="text-sm text-neutral-500 py-2">
          <span className="text-primary text-[22px] font-medium font-mono tracking-tighter leading-1">
            TechStack{" "}
          </span>
          <span className="italic text-sm font-mono tracking-normal">
            My go-to tools for crafting clean, scalable software.
          </span>
        </p>

        <div className="flex flex-wrap gap-2 justify-start items-center mt-3">
          {techs.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <Link href={tech.href} target="_blank" aria-label={tech.name}>
                  {tech.isMotion ? (
                    <div className="bg-[rgb(255,243,18)] rounded-full h-10 w-10 flex items-center justify-center">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={tech.size}
                        height={tech.size}
                      />
                    </div>
                  ) : (
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={tech.size}
                      height={tech.size}
                      className={[
                        tech.rounded
                          ? "rounded-full border border-neutral-200 bg-neutral-50"
                          : "rounded-sm",
                        tech.padded
                          ? "p-1 border border-neutral-200 bg-neutral-50"
                          : "",
                        tech.name === "Java" ? "-mx-1" : "",
                        tech.name === "Git" ? "sm:mx-1 md:mx-0" : "",
                      ].join(" ")}
                    />
                  )}
                </Link>
              </TooltipTrigger>

              <TooltipContent>{tech.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Techstack;
