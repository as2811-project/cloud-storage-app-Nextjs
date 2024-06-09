"use client";
import React from "react";
import { Divider } from "@nextui-org/react";
import Box from "./Box";
import { FileUpload } from "./UploadFile";

const RightSidebar: React.FC = () => {
  return (
    <div className="float-right flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[375px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <h1 className="text-xl flex items-center text-white">Actions</h1>
            <Divider className="text-white" />
            <FileUpload />
            <button
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert("Upload file clicked!")}
            >
              Upload File
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default RightSidebar;
