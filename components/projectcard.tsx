"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

interface ProjectProps {
  name: string;
  image: string;
  shortDesc: string;
  LiveLink: string;
  githubLink?: string;
  showStars?: boolean;
  stars?: number;
  stack?: string[]; // ✅ added
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
  const {
    name,
    image,
    shortDesc,
    LiveLink,
    githubLink,
    stars,
    showStars,
    stack,
  } = data;

  const cardVariant: Variants = {
    rest: {
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    hover: {
      y: -4,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const imageVariant: Variants = {
    rest: {},
    hover: {},
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      variants={cardVariant}
      className="relative h-full"
    >
      <Link href={LiveLink} target="_blank" className="relative block h-full">
        {/* Soft overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-sm"
          initial={false}
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(99,102,241,0.35), 0 0 20px rgba(99,102,241,0.25)"
              : "0 0 0 1px rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            delay: isHovered ? 0.12 : 0,
          }}
        />

        <div className="group border-primary/5 hover:border-primary/0 mx-auto flex h-full cursor-pointer flex-col justify-between border border-dashed px-2 py-2 transition-all duration-200">
          <div>
            {/* Image */}
            <motion.div
              className="relative mx-auto h-40 w-full overflow-hidden rounded-sm border border-primary/5"
              variants={imageVariant}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Image
                fill
                className="rounded-sm object-cover"
                src={image}
                alt={name}
              />

              {githubLink && (
                <div className="absolute right-2 bottom-2 z-20">
                  <motion.div
                    initial={false}
                    animate={{
                      y: isHovered ? 0 : 12,
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(githubLink, "_blank");
                    }}
                    className="rounded-full bg-neutral-900 p-1 text-white shadow-lg hover:scale-105 active:scale-95 dark:bg-neutral-100 dark:text-black"
                  >
                    <FaGithub size={16} />
                  </motion.div>
                </div>
              )}
            </motion.div>

            {/* Title + stars */}
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

            {/* Description + stack chips */}
            <div className="font-jetbrains text-xs tracking-tight text-neutral-500">
              <div>{shortDesc}</div>

              {stack && stack.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600
                                 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
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
        <span className="absolute top-0 left-0 mt-px text-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">
          <MdArrowOutward size={12} />
        </span>
        <span className="absolute top-0 left-0 mt-px -translate-x-full translate-y-full text-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0">
          <MdArrowOutward size={12} />
        </span>
      </div>
    </div>
  );
}
