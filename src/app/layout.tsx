import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import { Modal } from "@/components/modal";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hive",
  description: "By Harsh Tiwari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <ConvexClientProvider>
          <Toaster />
          <Modal />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
