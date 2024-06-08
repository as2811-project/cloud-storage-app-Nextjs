import Header from "@/components/Header";
import RecentFilesCard from "@/components/RecentFilesCard";
import SearchField from "@/components/SearchField";

export default function Home() {
  return (
    <div className="dark:bg-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="dark:text-white text-2xl font-semibold">
            Hi, user! 😊
          </h1>
        </div>
        <div className="mt-2">
          <SearchField />
        </div>
        <div className="mt-5">
          <h1 className="mb-5 text-xl dark:text-white">Recently uploaded</h1>
          <RecentFilesCard />
        </div>
      </Header>
    </div>
  );
}
