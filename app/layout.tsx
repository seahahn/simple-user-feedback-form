import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import TopBar from "@/components/composite/TopBar";
import texts from "@/constants/texts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: texts.APP_TITLE,
  description: texts.APP_DESCRIPTION,
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
