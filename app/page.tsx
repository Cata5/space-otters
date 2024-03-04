"use client";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import Sponsors from "@/components/sponsors";
import Members from "@/components/members";
import Activity from "@/components/activity";
import Obiective from "@/components/obiective";
import { siteConfig } from "@/config/site";
import localFont from "@next/font/local";
import Robot from "@/components/robot";
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
      {/* <Robot/> */}
      {siteConfig.navItems.map((item) => (
        <div key={item.href} id={item.href} className="flex items-center justify-center py-[5rem] ">
          {item.href === "obiective" && <Obiective />}
          {item.href === "evenimente" && <Activity />}
          {item.href === "sponsors" && <Sponsors />}
          {item.href === "members" && <Members />}
        </div>
      ))}
    </main>
  );
}
