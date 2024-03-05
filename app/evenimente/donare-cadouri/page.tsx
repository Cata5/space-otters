"use client"


import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Donare() {
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
        fetchTxtFile(siteConfig.evenimente.donare_cadouri_introd, setIntroContent);

        // Fetch text for "Desfasurare" when the component mounts
        fetchTxtFile(siteConfig.evenimente.donare_cadouri_desf, setDesfContent);
    }, []);

    return (
        <div>
            <link rel="icon" href={`../logo/${siteConfig.logo}`} sizes="any" className="rounded-full" />
            <div className="max-w-screen-xl mx-auto p-8">
                <h1 className="text-center text-3xl sm:text-5xl py-4">Donare Cadouri</h1>
                <div className="py-16 flex flex-col gap-8">
                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Introducere</h1>
                    <p className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap">
                        {introContent}</p>
                    <div className="flex flex-col xl:flex-row gap-4">
                        <Image src="../evenimente_photos/Donare_Cadouri.jpg" width={600} height={450} loading="lazy" alt="" />
                        <Image src="../evenimente_photos/Donare_cadouri_cadouri.jpg" width={600} height={450} loading="lazy" alt=" " />
                    </div>
                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl ">Desfasurare</h1>
                    <p className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap">{desfContent}</p>
                    <Image className="self-center " src="../evenimente_photos/Donare_cadouri_pozagrup.jpg" width={1300} height={0} loading="lazy" alt="" />
                </div>
            </div>
        </div>
        
    );
}

