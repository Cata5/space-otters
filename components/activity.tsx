import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, ScrollShadow } from "@nextui-org/react";
import loadTextFile from './textLoader';
import { siteConfig } from "@/config/site";

import { useRouter } from 'next/navigation';



interface FileContents {
  [key: string]: string | null;
}

export default function Activity() {
  const [fileContents, setFileContents] = useState<FileContents>({});
  const router = useRouter();

  useEffect(() => {
    const fetchTextFiles = async () => {
      const results: FileContents = {};

      try {
        await Promise.all(
          siteConfig.activity.map(async (activity) => {
            const text = await loadTextFile(activity.file_path);
            results[activity.title] = text;
          })
        );

        setFileContents(results);
      } catch (error) {
        console.error(error);
        // Handle error if necessary
      }
    };

    fetchTextFiles();
  }, []);

  return (
    <div className="flex flex-col m-auto items-center justify-center max-w-7xl ">
      <h1 className="text-center text-4xl">Evenimente</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-[2rem] m-[2rem] ">
        {siteConfig.activity.map((activity) => (
          <Card key={activity.title} className="max-w-full xl:max-w-[46%] bg-space-light text-space-dark hover:cursor-pointer flex items-center" isPressable onPress={() => router.push(`/evenimente/${activity.title.toLowerCase()}`)}>
            <div className="py-5" >
              <h1 className="text-justify text-2xl">{activity.title}</h1>
            </div>

            <CardBody className="px-6 py-6 max-h-[350px] indent-[1rem] text-justify text-medium text-default-600">
              <ScrollShadow>
                <p className="text-space-dark">{fileContents[activity.title]}</p>
              </ScrollShadow>
            </CardBody>
            <CardFooter className="gap-3">
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
