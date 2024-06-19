import "/globals.css";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center h-screen mb-5 bg-neutral-900">
        <div className="text-center mt-15">{children}</div>
      </body>
    </html>
  );
}
