"use client"


import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

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
                    <p className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap">
                        {introContent}</p>
                    <div className="flex flex-col xl:flex-row gap-4">
                        <Image src="../evenimente_photos/Dacia_SO.jpg" width={600} height={650} loading="lazy" alt="Space Otter team at Dacia" />
                        <Image src="../evenimente_photos/Dacia_workers.jpg" width={600} height={650} loading="lazy" alt="Workers of Dacia " />
                    </div>
                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl ">Desfasurare</h1>
                    <p className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap">{desfContent}</p>
                    <Image className="self-center " src="../../evenimente_photos/Dacia_robot.jpg" width={1300} height={0} loading="lazy" alt="Workers of Dacia " />
                </div>
            </div>
        </div>
    );
}

