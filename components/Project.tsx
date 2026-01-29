import React from "react";
import ProjectsGrid from "./projectcard";
import { projectdata } from "@/constants";

function getRepoPath(url: string) {
  try {
    const urlObj = new URL(url);
    const path = urlObj.pathname.replace(/^\//, "");
    return path;
  } catch (e) {
    return null;
  }
}

async function fetchRepoStars(repoUrl: string) {
  const repoPath = getRepoPath(repoUrl);
  if (!repoPath) return 0;

  try {
    const res = await fetch(`https://api.github.com/repos/${repoPath}`, {
      next: { revalidate: 36000 }, // Cache for 10 hour
    });

    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count;
  } catch (err) {
    console.error(`Error fetching stars for ${repoUrl}:`, err);
    return 0;
  }
}

const Projects = async () => {
  const projectsWithStars = await Promise.all(
    projectdata.map(async (project) => {
      let starCount = 0;

      if (project.githubLink && project.showStars) {
        starCount = await fetchRepoStars(project.githubLink);
      }

      return {
        ...project,
        stars: starCount,
      };
    }),
  );

  return (
    <section id="projects">
      <div className="w-full space-y-4 px-0 py-6 md:px-3.5">
        <div className="flex flex-col">
          <p className="text-sm text-neutral-500">
            <span className="text-primary text-[0.9rem] font-medium">
              Projects
            </span>{" "}
            <span className="italic">
              that combine code, design, and usability.
            </span>
          </p>
        </div>
        <ProjectsGrid projects={projectsWithStars} />
      </div>
    </section>
  );
};

export default Projects;
