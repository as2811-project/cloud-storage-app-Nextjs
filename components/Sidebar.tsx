"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiTagSimpleDuotone } from "react-icons/pi";
import { Divider } from "@nextui-org/react";
import SidebarItem from "./SidebarItem";
import Box from "./Box";
import TagItem from "./TagItems";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/favourites",
        href: "/",
        icon: IoHomeOutline,
      },
      {
        label: "Favourites",
        active: pathname === "/favourites",
        href: "/favourites",
        icon: MdFavoriteBorder,
      },
      {
        label: "Recently Deleted",
        active: pathname === "/deleted",
        href: "/deleted",
        icon: MdDeleteOutline,
      },
      {
        label: "Settings",
        active: pathname === "/settings",
        href: "/settings",
        icon: IoSettingsOutline,
      },
    ],
    [pathname]
  );
  const tags = useMemo(
    () => [
      {
        label: "Red",
        active: pathname === "/red",
        href: "/red",
        icon: PiTagSimpleDuotone,
        className: "text-red-500",
      },
      {
        label: "Green",
        active: pathname === "/green",
        href: "/green",
        icon: PiTagSimpleDuotone,
        className: "text-green-500",
      },
      {
        label: "Blue",
        active: pathname === "/blue",
        href: "/blue",
        icon: PiTagSimpleDuotone,
        className: "text-sky-500",
      },
      {
        label: "Yellow",
        active: pathname === "/yellow",
        href: "/yellow",
        icon: PiTagSimpleDuotone,
        className: "text-yellow-500",
      },
      {
        label: "Purple",
        active: pathname === "/purple",
        href: "/purple",
        icon: PiTagSimpleDuotone,
        className: "text-purple-500",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[250px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <h1 className="text-xl flex items-center">
              Next
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Cloud
              </span>
            </h1>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
            <Divider className="my-4" />
            <h1 className="mt-2">Tags</h1>
            {tags.map((item) => (
              <TagItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
