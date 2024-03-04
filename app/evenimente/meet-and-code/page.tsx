"use client"




import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";
import mammoth from "mammoth";
import { siteConfig } from "@/config/site";

export default function Scoli() {
    const [introContent, setIntroContent] = useState<string | null>(null);
    const [scopContent, setScopContent] = useState<string | null>(null);
    const [desfContent, setDesfContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchDocxFile = async (path: string, setContent: (content: string | null) => void) => {
            try {
                const response = await fetch(path);
                const arrayBuffer = await response.arrayBuffer();

                // Convert the ArrayBuffer to a Uint8Array
                const uint8Array = new Uint8Array(arrayBuffer);

                // Use mammoth to convert DOCX to HTML
                mammoth.extractRawText({ arrayBuffer: uint8Array })
                    .then((result) => {
                        setContent(result.value);
                    })
                    .catch((error) => {
                        console.error(error);
                        // Handle error if necessary
                    });
            } catch (error) {
                console.error(error);
                // Handle error if necessary
            }
        };

        // Fetch text for "Introducere" when the component mounts
        fetchDocxFile(siteConfig.evenimente.meet_and_code_introd, setIntroContent);
        fetchDocxFile(siteConfig.evenimente.meet_and_code_scop, setScopContent);

        // Fetch text for "Desfasurare" when the component mounts
        fetchDocxFile(siteConfig.evenimente.meet_and_code_desf, setDesfContent);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center mx-[1.75rem] xl:m-auto flex-col max-w-7xl">
                <h1 className="text-3xl sm:text-5xl py-[1rem]">Vizite Scoli Pitesti</h1>
                <div className="py-[10rem] flex gap-[4rem] flex-col">
                    <h1 className="text-3xl text-center sm:text-left">Introducere</h1>
                    <div
                        className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: introContent || "" }}
                    />
                    <h1 className="text-3xl text-center sm:text-left">Scop</h1>
                    <div
                        className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: scopContent || "" }}
                    />
                    <h1 className="text-3xl text-center sm:text-left">Desfasurare</h1>
                    <div
                        className="text-md text-center sm:text-xl sm:text-justify whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: desfContent || "" }}
                    />
                </div>
            </div>
        </div>
    );
}
