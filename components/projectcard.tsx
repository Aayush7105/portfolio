"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

interface ProjectProps {
  name: string;
  image: string;
  shortDesc: string;
  LiveLink: string;
  githubLink?: string;
  showStars?: boolean;
  stars?: number;
}

const ProjectsGrid = ({ projects }: { projects: ProjectProps[] }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {displayedProjects.map((project, idx) => (
          <ProjectCard key={idx} data={project} />
        ))}
      </div>

      {projects.length > 4 && (
        <div className="flex">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-medium text-neutral-500"
          >
            {showAll ? (
              <ShowButton text="Show Less" />
            ) : (
              <ShowButton text="Show More" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ data }: { data: ProjectProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, image, shortDesc, LiveLink, githubLink, stars, showStars } =
    data;

  const coverVariant: Variants = {
    open: {
      opacity: [0, 1, 1, 0, 1, 0, 1],
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    close: {
      opacity: 0,
      boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const coverLightVariant: Variants = {
    open: {
      opacity: [0, 1, 1, 0, 1, 0, 1],
      boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    close: {
      opacity: 0,
      boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="close"
      animate={isHovered ? "open" : "close"}
      className="relative h-full"
    >
      <Link href={LiveLink} target="_blank" className="relative block h-full">
        <motion.div
          variants={coverVariant}
          className="pointer-events-none absolute inset-0 z-10 mx-auto hidden border border-dashed border-white/15 bg-neutral-900/10 dark:block"
        ></motion.div>
        <motion.div
          variants={coverLightVariant}
          className="pointer-events-none absolute inset-0 z-10 mx-auto block border border-dashed border-black/15 bg-neutral-50/10 dark:hidden"
        ></motion.div>

        <div className="group border-primary/5 hover:border-primary/0 mx-auto flex h-full cursor-pointer flex-col justify-between border border-dashed px-2 py-2 transition-all duration-200">
          <div>
            <div className="relative mx-auto h-40 w-full overflow-hidden rounded-sm">
              <Image
                fill
                quality={90}
                className="rounded-sm object-cover"
                src={image}
                alt={name}
              />

              {githubLink && (
                <div className="absolute right-2 bottom-2 z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: isHovered ? 0 : 20,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(githubLink, "_blank");
                    }}
                    className="rounded-full bg-neutral-900 p-1 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-neutral-100 dark:text-black"
                  >
                    <LuGithub size={16} />
                  </motion.div>
                </div>
              )}
            </div>

            <div className="mt-3 flex w-full items-center justify-between">
              <div className="mb-1 text-sm font-[450] text-neutral-900 dark:text-neutral-100">
                {name}
              </div>

              {showStars && githubLink && stars !== undefined && (
                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <FaStar fill="#eab308" className="size-2.5" />
                  <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                    {stars}
                  </span>
                </div>
              )}
            </div>

            <div className="font-jetbrains text-xs tracking-tight text-neutral-500">
              <div>{shortDesc}</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsGrid;

function ShowButton({ text }: { text: string }) {
  return (
    <div className="group relative flex items-center gap-0.5">
      <p className="relative z-10">
        {text}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-neutral-500 transition-all duration-300 group-hover:w-full"></span>{" "}
      </p>
      <div className="relative overflow-hidden font-medium">
        <span className="invisible">
          <MdArrowOutward size={12} />
        </span>
        <span className="absolute top-0 left-0 mt-px text-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full hover:duration-300">
          <MdArrowOutward size={12} />
        </span>
        <span className="absolute top-0 left-0 mt-px -translate-x-full translate-y-full text-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 hover:duration-300">
          <MdArrowOutward size={12} />
        </span>
      </div>
    </div>
  );
}
