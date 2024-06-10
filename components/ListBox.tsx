import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function LBox() {
  return (
    <div className="w-full max-w-[260px] border-small px-1 py-5 rounded-small bg-neutral-900 border-default-200 rounded-md dark:border-default-100">
      {" "}
      <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxItem key="tag" className="hover:bg-neutral-800 rounded-md">
          Add Tag
        </ListboxItem>
        <ListboxItem key="copy" className="hover:bg-neutral-800 rounded-md">
          Favourite
        </ListboxItem>
        <ListboxItem key="edit" className="hover:bg-neutral-800 rounded-md">
          Edit file
        </ListboxItem>
        <ListboxItem
          key="delete"
          className="text-danger hover:bg-red-500 rounded-md"
          color="danger"
        >
          Delete file
        </ListboxItem>
      </Listbox>
    </div>
  );
}
