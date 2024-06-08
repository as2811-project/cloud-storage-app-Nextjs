"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function RecentFilesCard() {
  const list = [
    {
      title: "Orange",
      img: "/mc-file-document.png",
      filetype: "Word",
    },
    {
      title: "Raspberry",
      img: "https://nextui.org/images/fruit-3.jpeg",
      filetype: "JPEG",
    },
    {
      title: "Lemon",
      img: "/mc-file-pdf.png",
      filetype: "PDF",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-5">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onClick={() => console.log("item pressed")}
        >
          <CardBody className="p-1 ml-2">
            <div className="relative w-[200px] h-[240px] rounded-md bg-neutral-800 flex items-center justify-center">
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
          <CardFooter className="w-[200px] text-small justify-between">
            <b>{item.title}</b>
            <p>{item.filetype}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
