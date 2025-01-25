'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Esta",
//   description: "Esta",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const shouldShowSidebar = pathname !== "/";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased globalContainer`}
      >
        <main className="light text-foreground bg-background">
          <HeroUIProvider>
            <div className="flex">
              {shouldShowSidebar && <Sidebar />}
              <div className="flex-grow">{children}</div>
            </div>
          </HeroUIProvider>
        </main>
      </body>
    </html>
  );
}
