"use client";

import { useParams } from "next/navigation";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

type FileItem = {
  title: string;
  img: string;
  filetype: string;
};

export default function FolderPage() {
  //const [loading, setLoading] = useState(true);
  const params = useParams<{ folder: string }>();
  const folderName = params.folder;
  console.log(params);
  const [files, setFiles] = useState<FileItem[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch(`/api/files?folder=${folderName}`);
      const data = await response.json();
      setFiles(data.files);
    };

    if (folderName) {
      fetchFiles();
    }
  }, [folderName]);

  return (
    <div className="dark:bg-neutral-950 rounded-lg lg:h-full lg:w-full overflow-hidden overflow-y-auto mr-5">
      <Header>
        <h1 className="text-2xl font-normal mb-2">Files in {folderName}</h1>
      </Header>
      <div className="ml-8 grid grid-cols-3 gap-4">
        {files.map((file) => (
          <Card shadow="sm" isPressable>
            <CardBody className="p-1 ml-2">
              <div className="relative w-[240px] h-[200px] hover:bg-neutral-700 rounded-lg bg-neutral-800 flex items-center justify-center">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={file.title}
                  className="object-contain w-20 h-20"
                  src={file.img}
                  width={80}
                  height={80}
                />
              </div>
            </CardBody>
            <CardFooter className="w-[240px] text-bold justify-between">
              <p>{file.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
