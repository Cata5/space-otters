"use client"




import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Gradinita() {
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
        fetchTxtFile(siteConfig.evenimente.gradinita_introd, setIntroContent);
        fetchTxtFile(siteConfig.evenimente.gradinita_scop, setScopContent);

        // Fetch text for "Desfasurare" when the component mounts
        fetchTxtFile(siteConfig.evenimente.gradinita_desf, setDesfContent);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center mx-[1.75rem] xl:m-auto flex-col max-w-7xl">
                <h1 className="text-3xl sm:text-5xl py-4">Gradinita</h1>
                <div className="py-16 flex flex-col gap-8">
                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Introducere</h1>
                    <div
                        className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: introContent || "" }}
                    />
                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Scop</h1>
                    <div
                        className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: scopContent || "" }}
                    />
                    <div className="flex items-center justify-center flex-wrap gap-[1rem]">
                        <Image src="../evenimente_photos/Gradinita_copii.jpg" width={600} height={550} alt="" />
                        <Image src="../evenimente_photos/Gradinita_copii3.png" width={600} height={550} alt="" />
                        <Image src="../evenimente_photos/Gradinita_copii4.jpg" width={600} height={550} alt="" />
                        <Image src="../evenimente_photos/Gradinita_copii2.png" width={600} height={550} alt="" />
                    </div>

                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl">Desfasurare</h1>
                    <div
                        className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: desfContent || "" }}
                    />
                    <div className="flex items-center justify-center flex-wrap gap-[1rem]">
                        <Image src="../evenimente_photos/Gradinita_intrare.jpg" width={625} height={550} alt="" />
                        <Image src="../evenimente_photos/Gradinita_team.jpg" width={625} height={550} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
