import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple User Feedback Form",
  description: "Take Home Task for Gyeongho Ahn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
