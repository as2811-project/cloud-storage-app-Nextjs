"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

type FileItem = {
  title: string;
  img: string;
  filetype: string;
};

export default function FilesFolders() {
  const list: FileItem[] = [
    {
      title: "Orange",
      img: "/mc-file-document.png",
      filetype: "Word",
    },
    {
      title: "Raspberry",
      img: "/folder.png",
      filetype: "Folder",
    },
    {
      title: "Lemon",
      img: "/mc-file-pdf.png",
      filetype: "PDF",
    },
    {
      title: "Apple",
      img: "/mc-file-document.png",
      filetype: "Word",
    },
    {
      title: "Banana",
      img: "/folder.png",
      filetype: "Folder",
    },
    {
      title: "Pear",
      img: "/folder.png",
      filetype: "Folder",
    },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-row gap-4">
      {list.map((item, index) => (
        <Link
          href={item.filetype === "Folder" ? `/cloud/${item.title}` : "#"}
          key={index}
        >
          <Card shadow="sm" isPressable>
            <CardBody className="p-1 ml-2">
              <div className="relative w-[240px] h-[200px] hover:bg-neutral-700 rounded-lg bg-neutral-800 flex items-center justify-center">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={item.title}
                  className="object-contain w-20 h-20"
                  src={item.img}
                  width={80}
                  height={80}
                />
              </div>
            </CardBody>
            <CardFooter className="w-[240px] text-bold justify-between">
              <p>{item.title}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
