"use client";

import { githubConfig } from "@/config/github";
import React, { useState, useRef } from "react";
import ActivityCalendar, {
  Activity,
  ThemeInput,
} from "react-activity-calendar";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface CalendarProps {
  contributions: Contribution[];
}

export const GithubCalendarClient = ({ contributions }: CalendarProps) => {
  const [hoverInfo, setHoverInfo] = useState<{
    date: string;
    count: number;
  } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSubmissions = contributions.reduce((a, b) => a + b.count, 0);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const handleMouseEnter = (activity: Activity) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setHoverInfo({
      date: activity.date,
      count: activity.count,
    });
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setHoverInfo(null);
    }, 300);
  };

  const commonProps = {
    data: contributions,
    blockSize: 12,
    blockMargin: 1.5,
    blockRadius: 3,
    fontSize: githubConfig.fontSize,
    maxLevel: githubConfig.maxLevel,
    hideTotalCount: false,
    hideColorLegend: true,
    hideMonthLabels: false,
    labels: {
      months: githubConfig.months,
      weekdays: githubConfig.weekdays,
      totalCount: hoverInfo
        ? `${hoverInfo.count} contribution${
            hoverInfo.count !== 1 ? "s" : ""
          } on ${formatDate(hoverInfo.date)}`
        : `${totalSubmissions} contributions in the last year`,
    },
    renderBlock: (block: React.ReactElement, activity: Activity) => {
      return React.cloneElement(block, {
        onMouseEnter: () => handleMouseEnter(activity),
        onMouseLeave: handleMouseLeave,
      } as never);
    },
  };

  return (
    <>
      <div
        aria-hidden
        className="scrollbar-hide font-mono relative hidden w-full overflow-x-auto text-sm dark:block"
      >
        <ActivityCalendar
          {...commonProps}
          colorScheme="dark"
          theme={githubConfig.theme as ThemeInput}
          style={{ color: "rgb(115, 115, 115)" }}
        />
      </div>

      <div
        aria-hidden
        className=" font-mono relative block w-full overflow-x-auto text-md dark:hidden"
      >
        <ActivityCalendar
          {...commonProps}
          colorScheme="light"
          theme={githubConfig.theme as ThemeInput}
          style={{ color: "rgb(115, 115, 115)" }}
        />
      </div>
    </>
  );
};
