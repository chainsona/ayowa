import MainTitle from "@/app/components/MainTitle";
import Search from "./components/Search";

export default function Home() {
  return (
    <main
      className="relative h-full
        flex flex-col items-center justify-center
        bg-[#1C1C1E] text-gray-100"
    >
      <div className="z-10 w-full flex flex-col items-center gap-8 text-gray-300">
        <MainTitle />

        <div className="w-3/4 md:w-full max-w-screen-sm">
          <Search />
        </div>
      </div>
    </main>
  );
}
