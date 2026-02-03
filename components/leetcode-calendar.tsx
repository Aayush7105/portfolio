"use client";

import React, { useState, useRef } from "react";
import {
  ActivityCalendar,
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

const leetCodeTheme: ThemeInput = {
  dark: [
    "hsl(0, 0%, 18%)",
    "hsl(153, 66%, 16%)",
    "hsl(148, 100%, 21%)",
    "hsl(133, 63%, 40%)",
    "hsl(130, 61%, 53%)",
  ],

  light: [
    "hsl(140, 20%, 92%)", // 0 submissions → very light green tint
    "hsl(130, 64%, 76%)",
    "hsl(136, 53%, 51%)",
    "hsl(136, 54%, 41%)",
    "hsl(139, 54%, 28%)",
  ],
};

export const LeetCodeCalendarClient = ({ contributions }: CalendarProps) => {
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
    fontSize: 10,
    maxLevel: 4,
    hideTotalCount: false,
    hideColorLegend: true,
    hideMonthLabels: false,
    labels: {
      totalCount: hoverInfo
        ? `${hoverInfo.count} submission${
            hoverInfo.count !== 1 ? "s" : ""
          } on ${formatDate(hoverInfo.date)}`
        : `${totalSubmissions} submissions in the last year`,
    },
    renderBlock: (block: React.ReactElement, activity: Activity) => {
      return React.cloneElement(
        block as React.ReactElement<unknown>,
        {
          onMouseEnter: () => handleMouseEnter(activity),
          onMouseLeave: handleMouseLeave,
        } as never,
      );
    },
  };

  return (
    <>
      <div
        aria-hidden
        className="hide-mobile-scrollbar scrollbar-hide font-jetbrains relative hidden w-full overflow-x-auto text-xs dark:block"
      >
        <ActivityCalendar
          {...commonProps}
          colorScheme="dark"
          theme={leetCodeTheme}
          style={{ color: "rgb(115, 115, 115)" }}
        />
      </div>

      <div
        aria-hidden
        className="hide-mobile-scrollbar scrollbar-hide font-jetbrains relative block w-full overflow-x-auto text-xs dark:hidden"
      >
        <ActivityCalendar
          {...commonProps}
          colorScheme="light"
          theme={leetCodeTheme}
          style={{ color: "rgb(115, 115, 115)" }}
        />
      </div>
    </>
  );
};
