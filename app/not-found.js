"use client";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import Sponsors from "@/components/sponsors";
import Members from "@/components/members";
import Ftc from "@/components/ftc";
import Activity from "@/components/activity";
import Obiective from "@/components/obiective";
import { siteConfig } from "@/config/site";
import localFont from "@next/font/local";

const roca = localFont({
  src: [
    {
      path: "../public/fonts/Roca Black.ttf",
      weight: "500",
    },
  ],
  variable: "--font-roca",
});

export default function Page() {
  return (
    <div className="[&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:py-[10rem]">
      <Navbar />
      {siteConfig.navItems.map((item) => (
        <div key={item.href} id={item.href}>
          {item.href === "obiective" && <Obiective />}
          {item.href === "about_ftc" && <Ftc />}
          {item.href === "activity" && <Activity />}
          {item.href === "sponsors" && <Sponsors />}
          {item.href === "members" && <Members />}
        </div>
      ))}
    </div>
  );
}
