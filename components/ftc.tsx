"use client"
import React, { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"
import loadTextFile from './textLoader';
export default function Ftc() {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        const fetchTextFile = async () => {
            const text = await loadTextFile(siteConfig.ftc_description.file_path);
            if (text !== null) {
                setFileContent(text);
            }
        };

        fetchTextFile();
    }, []);
    return (
        <div className="max-w-6xl overflow-hidden mx-[1rem]">
            <p className="whitespace-pre-wrap break-words">{fileContent}</p>
        </div>
    )
}