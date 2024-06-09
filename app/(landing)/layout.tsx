import "/globals.css";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center h-screen mb-5 bg-gradient-to-t from-neutral-900 from-80% to-neutral-800">
        <div className="text-center mt-15">{children}</div>
      </body>
    </html>
  );
}
