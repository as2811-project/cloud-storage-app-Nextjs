import React from "react";
import { Input } from "@nextui-org/react";
import { IoMdSearch } from "react-icons/io";

const SearchField = () => {
  return (
    <div className="px-8 rounded-2xl bg-neutral-700 flex justify-center items-center text-white shadow-lg p-3">
      <Input
        label=""
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <IoMdSearch className="text-black/50 mr-2 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
};

export default SearchField;
