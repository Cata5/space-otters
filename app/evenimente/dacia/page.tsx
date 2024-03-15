"use client"


import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Navbar_Ev from "@/components/navbar_events";
export default function Dacia() {
    const [introContent, setIntroContent] = useState<string | null>(null);
    const [desfContent, setDesfContent] = useState<string | null>(null);
    const [conContent, setConContent] = useState<string | null>(null);

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
        fetchTxtFile(siteConfig.evenimente.dacia_con, setConContent);
    }, []);

    return (
        <div>
            <Navbar_Ev />
            <div className="flex items-center flex-col gap-[3rem] py-[1rem] mx-[2rem] md:m-auto min-h-screen">
                <h1 className="text-3xl sm:text-5xl py-[5rem]">Vizita Dacia</h1>
                <div className="flex flex-col items-center m-auto justify-center">
                    <h1 className="text-center sm:text-left text-3xl sm:text-5xl my-[3rem]">Introducere</h1>
                    {introContent !== null && (
                        <div className="flex flex-wrap justify-center gap-[3rem]">
                            {introContent.split('\n').map((paragraph, index) => (
                                <p key={index} className=" text-center text-sm sm:text-xl max-w-xl whitespace-pre-wrap">
                                    {paragraph}
                                </p>
                            ))}

                            <Image src="../evenimente_photos/Dacia_SO.jpg" width={620} height={650} loading="lazy" alt="Space Otter team at Dacia" />
                            <Image src="../evenimente_photos/Dacia_workers.jpg" width={620} height={650} loading="lazy" alt="Workers of Dacia " />
                        </div>
                    )}

                </div>
                <div className="flex flex-col items-center  justify-center">
                    <h1 className="text-center text-3xl sm:text-5xl my-3">Desfasurare</h1>
                    {desfContent !== null && (
                        <div className="flex flex-wrap justify-center gap-[1rem] m-auto">
                            {desfContent.split('\n').map((paragraph, index) => (
                                <p key={index} className=" text-center text-md sm:text-md max-w-[380px] whitespace-pre-wrap my-2">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center  justify-center">
                    <h1 className="text-center text-3xl sm:text-5xl my-3">Concluzie</h1>
                    {conContent !== null && (
                        <div className="flex flex-wrap justify-center gap-[1rem] m-auto">
                            {conContent.split('\n').map((paragraph, index) => (
                                <p key={index} className=" text-center text-xl sm:text-md max-w-4xl whitespace-pre-wrap my-2">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-center md:mx-[3rem]">
                    <Image className="self-center mx-[3rem]" src="../evenimente_photos/Dacia_robot.jpg" width={1285} height={650} loading="lazy" alt="Workers of Dacia " />
                </div>
            </div>
        </div>
    );
}

