"use client"


import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Navbar_Ev from "@/components/navbar_events";
export default function WildTech() {
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
    fetchTxtFile(siteConfig.evenimente.wild_tech_introd, setIntroContent);

    // Fetch text for "Desfasurare" when the component mounts
    fetchTxtFile(siteConfig.evenimente.wild_tech_desf, setDesfContent);
  }, []);

  return (
    <div>
      <Navbar_Ev />
    <div className="flex items-center flex-col gap-[3rem] py-[1rem] mx-[2rem] md:m-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl py-[5rem]">WildTech Meet</h1>
      <div className="flex xl:flex-row flex-col max-w-7xl gap-[1rem]">
        <div className="flex items-center flex-col max-w-3xl">
          <h1 className="text-center sm:text-left text-3xl sm:text-5xl my-[3rem]">Introducere</h1>
          <p className="text-center whitespace-pre-wrap"> {introContent}</p>
        </div>
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
    </div>
    </div>
  );
}

