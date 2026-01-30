import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Contactme = () => {
  const links = [
    {
      name: "X (Twitter)",
      url: "https://x.com/AayushRawat715",
      Icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aayushrawat7105",
      Icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Aayush7105",
      Icon: LuGithub,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Aayush_Rawat7105/",
      Icon: SiLeetcode,
    },
    {
      name: "Resume",
      url: "./Resume.pdf",
      Icon: FiFileText,
    },
  ];

  return (
    <div className="pb-7 flex flex-col gap-4 border-b border-dashed border-neutral-500/40 dark:border-neutral-500/50">
      <TooltipProvider delayDuration={150}>
        <div className="flex px-2 sm:px-8 md:px-10 gap-4 items-center">
          {links
            .filter((item) => item.name !== "Resume")
            .map(({ name, url, Icon }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link href={url} target="_blank" aria-label={name}>
                    <Icon className="size-5 text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 transition-all" />
                  </Link>
                </TooltipTrigger>

                <TooltipContent side="top">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
        </div>
      </TooltipProvider>

      {/* Resume button (same as your previous UI) */}
      {links
        .filter((item) => item.name === "Resume")
        .map(({ name, url, Icon }) => (
          <div key={name} className="px-1.5 sm:px-8 md:px-8">
            <Link href={url} target="_blank" aria-label={name}>
              <button className="group flex gap-2 px-4 py-1 border rounded-lg dark:border-neutral-700/50 bg-neutral-50 dark:bg-neutral-900 justify-center items-center font-mono text-neutral-700 dark:text-neutral-400 text-lg hover:text-neutral-950 dark:hover:text-neutral-200 hover:border-neutral-600/50 dark:hover:bg-neutral-800 hover:bg-neutral-100 cursor-pointer">
                <Icon className="group-hover:text-neutral-950 text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200" />
                {name}
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Contactme;
