import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chyrp Modernized",
  description: "A modern re-imagining of Chyrp CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
