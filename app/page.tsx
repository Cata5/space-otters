"use client";
import "@/styles/globals.css";
import Sponsors from "@/components/sponsors";
import Members from "@/components/members";
import Activity from "@/components/activity";
import Obiective from "@/components/obiective";
import { siteConfig } from "@/config/site";
import localFont from "@next/font/local";
import Navbar from "@/components/navbar";
const roca = localFont({
  src: [
    {
      path: "../public/fonts/Roca Black.ttf",
      weight: "500",
    },
  ],
  variable: "--font-roca",
});

export default function Home() {
  return (
    <main>
      <Navbar />

      {siteConfig.navItems.map((item) => (
        <div key={item.href} id={item.href} className="flex items-center justify-center py-[5rem] ">
          {item.href === "obiective" && <Obiective />}
          {item.href === "evenimente" && <Activity />}
          {item.href === "sponsori" && <Sponsors />}
          {item.href === "members" && <Members />}
        </div>
      ))}
    </main>
  );
}
