/*
 * GitHub Contribution Configuration
 *
 * This file contains the configuration for the GitHub contribution graph.
 * Update the username to match your GitHub profile.
 */

export const githubConfig = {
  username: "Aayush7105", // user your own github username here
  apiUrl: "https://github-contributions-api.deno.dev",

  // Chart settings
  fontSize: 10,
  maxLevel: 4,

  // Month labels
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  weekdays: ["", "M", "", "W", "", "F", ""],

  totalCountLabel: "{{count}} contributions in the last year",

  theme: {
    dark: [
      "hsl(0, 0%, 25%)",
      "hsl(0, 0%, 38%)",
      "hsl(0, 0%, 40%)",
      "hsl(0, 0%, 70%)",
      "hsl(0, 0%, 88%)",
    ],
    //    dark: [
    //   "hsl(0, 0%, 18%)",
    //   "hsl(153, 66%, 16%)",
    //   "hsl(148, 100%, 21%)",
    //   "hsl(133, 63%, 40%)",
    //   "hsl(130, 61%, 53%)",
    // ],
    light: [
      "hsl(0, 0%, 88%)",
      "hsl(0, 0%, 70%)",
      "hsl(0, 0%, 40%)",
      "hsl(0, 0%, 38%)",
      "hsl(0, 0%, 25%)",
    ],
    // dark: [
    //   "hsl(10, 10%, 10%)",
    //   "hsl(140, 30%, 28%)",
    //   "hsl(140, 40%, 36%)",
    //   "hsl(140, 55%, 45%)",
    //   "hsl(140, 70%, 55%)",
    // ],
    // light: [
    //   "hsl(140, 70%, 92%)",
    //   "hsl(140, 65%, 82%)",
    //   "hsl(140, 55%, 65%)",
    //   "hsl(140, 45%, 48%)",
    //   "hsl(140, 35%, 32%)",
    // ],
  },

  errorState: {
    title: "Unable to load GitHub contributions",
    description: "Check out my profile directly for the latest activity",
    buttonText: "View on GitHub",
  },

  loadingState: {
    title: "Loading contributions...",
    description: "Fetching your GitHub activity data",
  },
};
