import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, ScrollShadow } from "@nextui-org/react";
import loadTextFile from './textLoader';
import { siteConfig } from "@/config/site";

interface FileContents {
  [key: string]: string | null;
}

export default function Activity() {
  const [fileContents, setFileContents] = useState<FileContents>({});

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
  }, );

  return (
    <div className="flex flex-row m-auto items-center justify-center gap-[1rem] mx-[1rem] flex-wrap">
      {siteConfig.activity.map((activity) => (
        <Card key={activity.title} className="max-w-[340px]">
          <div className="flex items-end justify-center py-5">
            <h4 className="text-justify">{activity.title}</h4>
          </div>

          <CardBody className="px-3 py-3 max-h-[350px] text-small text-default-500">
            <ScrollShadow>
              <p>{fileContents[activity.title]}</p>
            </ScrollShadow>
          </CardBody>
          <CardFooter className="gap-3">
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
