import Header from "@/components/Header";
import RecentFilesCard from "@/components/RecentFilesCard";
import SearchField from "@/components/SearchField";
import FilesFolders from "@/components/FilesFolders";

export default function Home() {
  return (
    <div className="dark:bg-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto mr-6">
      <Header>
        <div className="mb-2">
          <h1 className="dark:text-white text-2xl font-semibold subpixel-antialiased ">
            Hi, user! 😊
          </h1>
          <div className="mt-2">
            <SearchField />
          </div>
        </div>
      </Header>

      <div className="ml-8">
        <h1 className="mb-5 text-xl dark:text-white subpixel-antialiased ">
          Recently uploaded
        </h1>
        <RecentFilesCard />
      </div>
      <div className="ml-8 mt-4">
        <h1 className="text-xl mb-5 dark:text-white subpixel-antialiased ">
          All files
        </h1>
        <FilesFolders />
      </div>
    </div>
  );
}
