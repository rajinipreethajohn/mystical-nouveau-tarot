
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mystical Nouveau Tarot",
  description: "Experience the magic of tarot through mystical nouveau art"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
