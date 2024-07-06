import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import { WatchlistProvider } from "@/context/watchlist-storage";
import { PreloadResources } from "./preload-resources";

const inter = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "99 Hotstar",
  description:
    "99 Hotstar is a movie catalog app built with Next.js and no UI libraries. Explore our vast collection of movies with a sleek, intuitive interface. Discover blockbusters, classics, and hidden gems in a user-friendly environment crafted for movie enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PreloadResources />
      <body className={inter.className}>
        <WatchlistProvider>
          <Sidebar />
          <main>{children}</main>
        </WatchlistProvider>
      </body>
    </html>
  );
}
