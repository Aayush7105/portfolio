import { githubConfig } from "@/config/github";
import React from "react";
import { GithubCalendarClient } from "./github-calender";

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return contributions.filter((item) => new Date(item.date) >= oneYearAgo);
}

async function getContributions(): Promise<ContributionItem[] | null> {
  try {
    const res = await fetch(
      `${githubConfig.apiUrl}/${githubConfig.username}.json`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) return null;
    const data: { contributions?: unknown[] } = await res.json();
    if (!data?.contributions || !Array.isArray(data.contributions)) return null;

    const flattened = data.contributions.flat();

    const map = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };

    const valid = flattened
      .filter(
        (item: unknown): item is GitHubContributionResponse =>
          typeof item === "object" &&
          item !== null &&
          "date" in item &&
          "contributionCount" in item &&
          "contributionLevel" in item,
      )
      .map((item) => ({
        date: String(item.date),
        count: Number(item.contributionCount || 0),
        level: (map[item.contributionLevel as keyof typeof map] || 0) as
          | 0
          | 1
          | 2
          | 3
          | 4,
      }));

    return filterLastYear(valid);
  } catch (err) {
    console.error("Failed to fetch GitHub contributions:", err);
    return null;
  }
}

export default async function Github() {
  const contributions = await getContributions();

  if (!contributions || contributions.length === 0) {
    return <></>;
  }

  return (
    <div className="max-w-full space-y-4 overflow-hidden px-2 py-6 md:px-6 border-b border-t border-neutral-500/40 border-dashed dark:border-neutral-500/50">
      <div className="flex flex-col">
        <p className="text-sm text-neutral-500 p-2">
          <span className="text-primary text-xl font-medium font-mono tracking-tighter leading-1">
            Commit Canvas{" "}
          </span>
          <span className="italic text-sm font-mono tracking-normal">
            Where every commit reflects my journey toward better code.
          </span>
        </p>
      </div>

      <GithubCalendarClient contributions={contributions} />
    </div>
  );
}
