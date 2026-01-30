import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main
      className="
        bg-white/90 dark:bg-neutral-900/30
        bg-[repeating-linear-gradient(45deg,#00000008_0px,#00000008_1px,transparent_1px,transparent_8px)]
        dark:bg-[repeating-linear-gradient(45deg,#ffffff0d_0px,#ffffff0d_1px,transparent_1px,transparent_8px)]
      "
    >
      <Landing />
    </main>
  );
}
