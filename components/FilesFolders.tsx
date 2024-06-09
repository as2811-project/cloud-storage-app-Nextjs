"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function FilesFolders() {
  const list = [
    {
      title: "Orange",
      img: "/mc-file-document.png",
      filetype: "Word",
    },
    {
      title: "Raspberry",
      img: "/folder.png",
      filetype: "JPEG",
    },
    {
      title: "Lemon",
      img: "/mc-file-pdf.png",
      filetype: "PDF",
    },
  ];

  return (
    <div className="grid grid-cols-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onClick={() => console.log("item pressed")}
        >
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
      ))}
    </div>
  );
}
