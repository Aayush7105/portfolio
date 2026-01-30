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
  return (
    <TooltipProvider>
      <div className="flex flex-col px-5 py-5 md:px-8 md:py-5 border-b border-dashed border-neutral-500/40 dark:border-neutral-500/50 ">
        <h1 className="text-primary text-[22px] font-medium tracking-tighter font-mono mb-4">
          TechStack
        </h1>

        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-start md:justify-start items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://www.typescriptlang.org/">
                <Image
                  src="/logos/typescript.svg"
                  alt="TypeScript"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>TypeScript</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <Image
                  src="/logos/javascript.svg"
                  alt="JavaScript"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>JavaScript</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <Image
                  src="/logos/html.svg"
                  alt="HTML"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>HTML</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <Image
                  src="/logos/css.svg"
                  alt="CSS"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>CSS</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://react.dev/learn">
                <Image
                  src="/logos/react.svg"
                  alt="React"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>React</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">
                <Image
                  src="/logos/nodejs-icon.svg"
                  alt="Node.js"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Node.js</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://expressjs.com/en/starter/installing.html">
                <Image
                  src="/logos/Express.svg"
                  alt="Express"
                  height={40}
                  width={40}
                  className="rounded-full border border-neutral-200 bg-neutral-50"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Express</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://nextjs.org/">
                <Image
                  src="/logos/nextjs.svg"
                  alt="Next.js"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Next.js</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://vite.dev/">
                <Image
                  src="/logos/vite.svg"
                  alt="Vite"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Vite</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://tailwindcss.com/docs/installation/using-vite">
                <Image
                  src="/logos/tailwind.svg"
                  alt="Tailwind CSS"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Tailwind CSS</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://motion.dev/">
                <div className="bg-[rgb(255,243,18)] rounded-full h-10 w-10 flex items-center justify-center">
                  <Image
                    src="/logos/Motionlogo.svg"
                    alt="Framer Motion"
                    height={32}
                    width={32}
                  />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Framer Motion</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://motion.dev/">
                <Image
                  src="/logos/git.svg"
                  alt="Git"
                  height={40}
                  width={40}
                  className="sm:mx-1 md:mx-0 rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Git</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://www.python.org/about/gettingstarted/">
                <Image
                  src="/logos/python.svg"
                  alt="Python"
                  height={40}
                  width={40}
                  className="rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Python</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://docs.oracle.com/en/java/">
                <Image
                  src="/logos/java.svg"
                  alt="Java"
                  height={40}
                  width={40}
                  className="-mx-1 rounded-sm"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Java</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://www.mongodb.com/docs/">
                <Image
                  src="/logos/mongo.svg"
                  alt="MongoDB"
                  height={40}
                  width={40}
                  className="rounded-full border border-neutral-200 bg-neutral-200"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>MongoDB</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://dev.mysql.com/doc/mysql-getting-started/en/">
                <Image
                  src="/logos/mysql-icon.svg"
                  alt="MySQL"
                  height={40}
                  width={40}
                  className="p-1 rounded-sm border border-neutral-100 bg-neutral-50"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>MySQL</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Techstack;
