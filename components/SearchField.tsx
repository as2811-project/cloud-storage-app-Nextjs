import React from "react";
import { Input } from "@nextui-org/react";
import { IoMdSearch } from "react-icons/io";

const SearchField = () => {
  return (
    <div className="p-2 rounded-2xl bg-neutral-700 flex justify-center items-center text-white shadow-lg">
      <IoMdSearch className="ml-2" size={25} />
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
      />
    </div>
  );
};

export default SearchField;
