import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mx-auto max-w-3xl bg-linear-to-br from-red-300 via-neutral-300 via-50% to-red-300/30 bg-clip-text py-2 text-center text-5xl leading-relaxed font-medium tracking-tighter text-balance text-transparent md:text-6xl filter: blur(0px); opacity: 1; transform: none;">
        <span className="block leading-[1.1]">Design Bold.</span>
        <span className="block leading-[1.1]">Ship Seamless.</span>
      </h1>
    </div>
  );
}
