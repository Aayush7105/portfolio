import Container from "@/components/container";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-hidden
        dark:bg-[radial-gradient(#ffffff26_1px,transparent_1px)]
        bg-[radial-gradient(#00000026_1px,transparent_1px)]
        bg-size-[20px_20px] flex justify-center"
    >
      <Container>
        <Landing />
      </Container>
    </main>
  );
}
