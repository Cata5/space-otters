"use client"




import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Navbar_Ev from "@/components/navbar_events";
export default function Scoli() {
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
    fetchTxtFile(siteConfig.evenimente.antidrog_introd, setIntroContent);
    fetchTxtFile(siteConfig.evenimente.antidrog_scop, setScopContent);
    // Fetch text for "Desfasurare" wheantidrog component mounts
    fetchTxtFile(siteConfig.evenimente.antidrog_desf, setDesfContent);
  }, []);

  return (
    <div>
      <Navbar_Ev />
      <div className="flex items-center flex-col gap-[3rem] py-[1rem] m-[2rem] md:m-auto min-h-screen">
        <h1 className="text-3xl sm:text-5xl py-[5rem]">Drug Free Future</h1>
        <div className="flex xl:flex-row flex-col max-w-7xl gap-[1rem]">
          <div className="flex items-center flex-col max-w-3xl">
            <h1 className="text-center sm:text-left text-3xl sm:text-5xl my-[3rem]">Introducere</h1>
            <p className="text-center whitespace-pre-wrap"> {introContent}</p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center">
          <h1 className="text-center text-3xl sm:text-5xl my-3">Desfasurare</h1>
          {desfContent !== null && (
            <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
              {desfContent.split('\n').map((paragraph, index) => (
                <p key={index} className=" text-center max-w-md whitespace-pre-wrap my-2">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center flex-col max-w-3xl">
          <h1 className="text-center sm:text-left text-3xl sm:text-5xl my-[3rem]">Concluzie</h1>
          {scopContent !== null && (
            <div className="flex flex-wrap justify-center gap-[2rem] m-auto">
              {scopContent.split('\n').map((paragraph, index) => (
                <p key={index} className=" text-center max-w-3xl whitespace-pre-wrap my-2">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center mx-[1rem] gap-[1rem] m-auto flex-wrap">
          <Image src='../evenimente_photos/DFF1.jpg' alt="" width={450} height={500}></Image>
          <Image src='../evenimente_photos/DFF2.jpg' alt="" width={450} height={500}></Image>
          <Image src='../evenimente_photos/DFF3.jpg' alt="" width={450} height={500}></Image>
          <Image src='../evenimente_photos/DFF4.jpg' alt="" width={450} height={500}></Image>
        </div>

      </div>
    </div>
  );
}
