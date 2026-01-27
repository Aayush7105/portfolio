import Container from "@/components/container";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main
      className="inset-1 
        dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]
        bg-[radial-gradient(#00000033_1px,transparent_1px)]
        bg-size-[20px_20px] flex justify-center items-center "
    >
      <Container>
        <Landing />
      </Container>
    </main>
  );
}
