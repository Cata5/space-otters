"use client"




import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

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
    fetchTxtFile(siteConfig.evenimente.scoli_introd, setIntroContent);
    fetchTxtFile(siteConfig.evenimente.scoli_scop, setScopContent);

    // Fetch text for "Desfasurare" when the component mounts
    fetchTxtFile(siteConfig.evenimente.scoli_desf, setDesfContent);
  }, []);

  return (
    // <div>
    //   <div className="flex items-center justify-center mx-[1.75rem] xl:m-auto flex-row max-w-7xl">
    //     <h1 className="text-3xl sm:text-5xl py-4">Vizite Scoli Pitesti</h1>
    //     <div className="py-16 flex flex-col  gap-8">
    //       <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Introducere</h1>
    //       <div
    //         className="text-md text-center max-w-3xl sm:text-xl sm:text-justify whitespace-pre-wrap"
    //         dangerouslySetInnerHTML={{ __html: introContent || "" }}
    //       />
    //       <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Scop</h1>
    //       <div
    //         className="text-md text-center max-w-3xl sm:text-xl sm:text-justify whitespace-pre-wrap"
    //         dangerouslySetInnerHTML={{ __html: scopContent || "" }}
    //       />
    //       <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Desfasurare</h1>
    //       <div
    //         className="text-md text-center max-w-3xl sm:text-xl sm:text-justify whitespace-pre-wrap"
    //         dangerouslySetInnerHTML={{ __html: desfContent || "" }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center flex-col gap-[3rem] py-[1rem] mx-[2rem] md:m-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl py-4">Vizite Scoli Pitesti</h1>
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
        <div className="flex justify-center gap-[1rem] m-auto">
          <Image src='../evenimente_photos/Poza_scoala1.jpg' alt="" width={450} height={500}></Image>
          <Image src='../evenimente_photos/Poza_scoala2.jpg' alt="" width={450} height={500}></Image>
          <Image src='../evenimente_photos/Poza_scoala3.jpg' alt="" width={450} height={500}></Image>
        </div>
      </div>

    </div>
  );
}
