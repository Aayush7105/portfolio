import { Fleur_De_Leah } from "next/font/google";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";

const Contactme = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex px-2  sm:px-8 md:px-10 gap-4">
        <Link
          href="https://x.com/AayushRawat715"
          target="_blank"
          aria-label="Twitter"
        >
          <FaXTwitter className="size-5 fill-neutral-700 dark:fill-neutral-400 hover:fill-neutral-950 dark:hover:fill-neutral-100 transition-all" />
        </Link>
        <Link
          href="https://linkedin.com/in/aayushrawat7105"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin className="size-5 fill-neutral-700 dark:fill-neutral-400 hover:fill-neutral-950 dark:hover:fill-neutral-100 transition-all" />
        </Link>
        <Link
          href="https://github.com/Aayush7105"
          target="_blank"
          aria-label="Github"
        >
          <LuGithub className="size-5 text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 transition-all" />
        </Link>
        <Link
          href="https://leetcode.com/u/Aayush_Rawat7105/"
          target="_blank"
          aria-label="Leetcode"
        >
          <SiLeetcode className="-mx-1.5 size-5 fill-neutral-700 dark:fill-neutral-400 hover:fill-neutral-950 dark:hover:fill-neutral-100 transition-all" />
        </Link>
      </div>
      <div className="px-2  sm:px-8 md:px-10 ">
        <button className="group flex gap-2 px-4 py-1 border rounded-lg dark:border-neutral-700/50 bg-neutral-50 dark:bg-neutral-900 justify-center items-center font-mono text-neutral-700 dark:text-neutral-400 text-lg hover:text-neutral-950 dark:hover:text-neutral-200 hover:border-neutral-600/50 dark:hover:bg-neutral-800 hover:bg-neutral-100 cursor-pointer">
          <FiFileText className="group-hover:text-neutral-950 text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200" />
          Resume
        </button>
      </div>
    </div>
  );
};

export default Contactme;
