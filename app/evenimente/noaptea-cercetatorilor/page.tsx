"use client"

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Navbar_Ev from "@/components/navbar_events";
export default function NC() {
  const [introContent, setIntroContent] = useState<string | null>(null);
  const [scopContent, setScopContent] = useState<string | null>(null);
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
    fetchTxtFile(siteConfig.evenimente.nc_introd, setIntroContent);
    fetchTxtFile(siteConfig.evenimente.nc_scop, setScopContent);

    // Fetch text for "Desfasurare" when the component mounts
    fetchTxtFile(siteConfig.evenimente.nc_desf, setDesfContent);
  }, []);

  return (
    <div>
      <Navbar_Ev />
    <div className="flex items-center flex-col gap-[3rem] py-[1rem] mx-[2rem] md:m-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl py-[5rem]">Vizite Scoli Pitesti</h1>
      <div className="flex flex-col items-center  justify-center">
        <h1 className="text-center text-3xl sm:text-5xl my-3">Introducere</h1>
        {introContent !== null && (
          <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
            {introContent.split('\n').map((paragraph, index) => (
              <p key={index} className=" text-justify max-w-md whitespace-pre-wrap my-2">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center  justify-center">
        <h1 className="text-center text-3xl sm:text-5xl my-3">Scop</h1>
        {scopContent !== null && (
          <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
            {scopContent.split('\n').map((paragraph, index) => (
              <p key={index} className=" text-justify max-w-md whitespace-pre-wrap my-2">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center  justify-center">
        <h1 className="text-center text-3xl sm:text-5xl my-3">Desfasurare</h1>
        {desfContent !== null && (
          <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
            {desfContent.split('\n').map((paragraph, index) => (
              <p key={index} className=" text-justify max-w-[400px] whitespace-pre-wrap my-2">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <Image src="../evenimente_photos/NC.jpg" width={1300} height={800} alt="" />
    </div>
    </div>
  );
}
