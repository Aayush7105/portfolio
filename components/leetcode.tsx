import React from "react";
import { LeetCodeCalendarClient } from "./leetcode-calendar";

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type LeetCodeApiResponse = {
  status: string;
  message?: string;
  submissionCalendar: Record<string, number>; // { "unix_timestamp": count }
};

// Calculates intensity level (0-4) based on submission count
const getLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
};

async function getLeetCodeContributions(): Promise<ContributionItem[] | null> {
  try {
    const res = await fetch(
      "https://leetcode-stats-api.herokuapp.com/Aayush_rawat7105",
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return null;

    const data: LeetCodeApiResponse = await res.json();

    if (data.status === "error" || !data.submissionCalendar) {
      return null;
    }

    const submissionMap = new Map<string, number>();
    Object.entries(data.submissionCalendar).forEach(([timestamp, count]) => {
      const date = new Date(parseInt(timestamp) * 1000);
      const dateStr = date.toISOString().split("T")[0]; // YYYY-MM-DD
      submissionMap.set(dateStr, count);
    });

    const contributions: ContributionItem[] = [];
    const today = new Date();

    for (let i = 365; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split("T")[0];

      const count = submissionMap.get(dateString) || 0;

      contributions.push({
        date: dateString,
        count: count,
        level: getLevel(count),
      });
    }

    return contributions;
  } catch (err) {
    console.error("Failed to fetch LeetCode contributions:", err);
    return null;
  }
}

export default async function LeetCode() {
  const contributions = await getLeetCodeContributions();

  if (!contributions || contributions.length === 0) {
    return <></>;
  }

  return (
    <div className="max-w-full space-y-4 overflow-hidden px-2 py-6 md:px-6 border-b border-t border-neutral-500/40 border-dashed dark:border-neutral-500/50  mx-auto ">
      {" "}
      <div className="flex flex-col">
        <p className="text-sm text-neutral-500 p-2">
          <span className="text-primary text-xl font-medium font-mono tracking-wide leading-1">
            Leetcode Journey{" "}
          </span>
        </p>
      </div>
      <LeetCodeCalendarClient contributions={contributions} />
    </div>
  );
}
