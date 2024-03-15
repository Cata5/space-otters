"use client"



import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Navbar_Ev from "@/components/navbar_events";
export default function Demo_Campulung() {
  const [introContent, setIntroContent] = useState<string | null>(null);
  const [desfContent, setDesfContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchTxtFile = async (path: string, setContent: (content: string | null) => void) => {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const textContent = await response.text();
        setContent(textContent);
      } catch (error) {
        console.error(error);
        // Handle error if necessary
      }
    };

    // Fetch text for "Introducere" when the component mounts
    fetchTxtFile(siteConfig.evenimente.roblod_introd, setIntroContent);

    // Fetch text for "Desfasurare" when the component mounts
    fetchTxtFile(siteConfig.evenimente.roblod_desf, setDesfContent);
  }, []);

  return (
    <div>
      <Navbar_Ev />
    <div className="flex items-center flex-col gap-[3rem] py-[1rem] mx-[2rem] md:m-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl py-[5rem]">RoBlood</h1>
      <div className="flex flex-col items-center m-auto justify-center">
        <h1 className="text-center text-3xl sm:text-5xl my-3">Introducere</h1>
        {introContent !== null && (
          <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
            {introContent.split('\n').map((paragraph, index) => (
              <p key={index} className="text-center max-w-md whitespace-pre-wrap my-2">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center m-auto justify-center">
        <h1 className="text-center text-3xl sm:text-5xl my-3">Desfasurare</h1>
        {desfContent !== null && (
          <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
            {desfContent.split('\n').map((paragraph, index) => (
              <p key={index} className="text-center max-w-md whitespace-pre-wrap my-2">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex m-auto gap-[1rem] justify-center flex-wrap">
        <Image src='../evenimente_photos/RoB1.png' width={900} height={400} alt=""></Image>
        <Image src='../evenimente_photos/RoB2.png' width={900} height={400} alt=""></Image>
      </div>
    </div>
    </div>
  );
}
