import Container from "@/components/container";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative overflow-hidden border border-dotted border-neutral-300/80">
      <div
        className="absolute inset-1 
        dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]
        bg-[radial-gradient(#00000033_1px,transparent_1px)]
        bg-size-[20px_20px] flex justify-center items-center"
      >
        <Container>
          <div className="relative h-screen w-5xl bg-neutral-100 dark:bg-neutral-950">
            <div
              className=" bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),
              linear-gradient(to_bottom,#0000000F_1px,transparent_1px)]
              border border-neutral-400/50
              dark:absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1A_1px,transparent_1px),linear-gradient(to_bottom,#8080801A_1px,transparent_1px)] bg-size-[14px_24px] flex justify-center items-center  dark:border-neutral-700/50"
            >
              <Landing />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
