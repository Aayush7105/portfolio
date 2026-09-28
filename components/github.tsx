import { githubConfig } from "@/config/github";
import { GithubCalendarClient } from "./github-calender";

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);
  
  return contributions
    .filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= oneYearAgo && itemDate <= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

async function getContributions(): Promise<ContributionItem[] | null> {
  try {
    const res = await fetch(
      `${githubConfig.apiUrl}/${githubConfig.username}`,
      { next: { revalidate: 300 } },
    );

    if (!res.ok) return null;
    const data: { contributions?: unknown[] } = await res.json();
    if (!data?.contributions || !Array.isArray(data.contributions)) return null;

    const flattened = data.contributions.flat();

    const valid = flattened
      .filter(
        (item: unknown): item is GitHubContributionResponse =>
          typeof item === "object" &&
          item !== null &&
          "date" in item &&
          "count" in item &&
          "level" in item,
      )
      .map((item) => ({
        date: String(item.date),
        count: Number(item.count || 0),
        level: Number(item.level || 0) as 0 | 1 | 2 | 3 | 4,
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
    <div className="max-w-full space-y-4 overflow-hidden px-2 py-6 md:px-6 border-b border-t border-neutral-500/40 border-dashed dark:border-neutral-700/50">
      <div className="flex flex-col">
        <p className="text-sm text-neutral-500 p-2">
          <span className="text-primary text-xl font-medium font-mono tracking-tighter leading-1">
            Commit Canvas{" "}
          </span>
          <span className="italic text-sm font-mono tracking-normal">
            Small commits. Real progress.
          </span>
        </p>
      </div>

      <GithubCalendarClient contributions={contributions} />
    </div>
  );
}
