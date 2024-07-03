import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

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
      <body className={inter.className}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
