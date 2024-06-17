import { NextRequest, NextResponse } from "next/server";

type FileItem = {
  title: string;
  img: string;
  filetype: string;
  folder: string;
};

const files: FileItem[] = [
  { title: "Document1", img: "/mc-file-document.png", filetype: "Word", folder: "Banana" },
  { title: "Document2", img: "/mc-file-pdf.png", filetype: "PDF", folder: "Banana" },
  { title: "Image1", img: "/folder.png", filetype: "JPEG", folder: "Raspberry" },
  // Add more items here
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json({ error: "Folder is required" }, { status: 400 });
  }

  const filteredFiles = files.filter(file => file.folder === folder);

  return NextResponse.json({ files: filteredFiles });
}
