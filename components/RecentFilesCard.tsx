import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SlOptionsVertical } from "react-icons/sl";
import LBox from "./ListBox";

export default function RecentFilesCard() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

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
    <div className="grid grid-cols-3 gap-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onClick={() => console.log("item pressed")}
        >
          <CardBody className="relative p-1 ml-2">
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
              <div className="absolute top-2 right-2 z-10 bg-red-900 rounded-md">
                <SlOptionsVertical
                  className="text-white absolute top-2 right-2 border-none cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCardIndex(
                      index === selectedCardIndex ? null : index
                    );
                  }}
                />
                {index === selectedCardIndex && <LBox />}
              </div>
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
