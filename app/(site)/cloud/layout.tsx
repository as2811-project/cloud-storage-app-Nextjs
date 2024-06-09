import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "/globals.css";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSection";

const geist = GeistSans;

export const metadata: Metadata = {
  title: "NextCloud",
  description: "A cloud storage project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="flex h-screen">
          <Sidebar>{children}</Sidebar>
          <main className="flex-1 overflow-y-auto"></main>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
