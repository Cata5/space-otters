"use client"


import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function Dacia() {
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
    fetchTxtFile(siteConfig.evenimente.dacia_introd, setIntroContent);

    // Fetch text for "Desfasurare" when the component mounts
    fetchTxtFile(siteConfig.evenimente.dacia_desf, setDesfContent);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-center text-3xl sm:text-5xl py-4">Vizita Dacia</h1>
        <div className="py-16 flex flex-col gap-8">
          <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Introducere</h1>
          <div
            className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: introContent || "" }}
          />
          <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Desfasurare</h1>
          <div
            className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: desfContent || "" }}
          />
        </div>
      </div>
    </div>
  );
}

