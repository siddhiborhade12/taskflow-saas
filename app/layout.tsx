import "./globals.css";

export const metadata = {
  title: "TaskFlow",
  description: "Task management made smart",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
