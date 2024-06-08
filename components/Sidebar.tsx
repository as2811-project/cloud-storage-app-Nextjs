"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import Box from "./Box";

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
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
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
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
