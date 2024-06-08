"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// interface RecentFilesProps {
//     files: Files[]
// }

export default function RecentFilesCard() {
  const list = [
    {
      title: "Orange",
      img: "https://nextui.org/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://nextui.org/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://nextui.org/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://nextui.org/images/fruit-4.jpeg",
      price: "$5.30",
    },

    // if (files.length===0) {
    //     return (
    //         <div className="mt-4 text-white">
    //         You have not uploaded any files yet.
    //         </div>
    //     )
    // }
  ];

  return (
    <div className="gap-2 grid grid-cols-5">
      {list.map((item, index) => (
        <Card
          //shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-[200px] object-cover h-[240px] rounded-md"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="w-[200px] text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
