import Header from "@/components/Header";
import SearchField from "@/components/SearchField";

export default function Home() {
  return (
    <div className="bg-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-2xl font-semibold">Hi, user! 😊</h1>
        </div>
        <div className="mt-2">
          <SearchField />
        </div>
      </Header>
    </div>
  );
}
