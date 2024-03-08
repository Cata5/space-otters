import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, ScrollShadow } from "@nextui-org/react";
import loadTextFile from './textLoader';
import { siteConfig } from "@/config/site";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
    <div className="hidden xl:flex flex-col m-auto items-center justify-center max-w-7xl overflow-hidden">
      <h1 className="text-center text-4xl">Evenimente</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="max-w-full m-[.5rem] text-space-light"
      >
        {siteConfig.activity.map((activity, index, array) => (
          <SwiperSlide key={activity.title} >
            <Card
              className={`flex flex-col grow bg-space-light text-space-dark hover:cursor-pointer  items-center 
              m-[4.5rem]  xl:h-[10rem] `}
              isPressable
              onPress={() => router.push(`/evenimente/${activity.href}`)}
              >
              <div className="py-3">
                <h1 className="text-xl">{activity.title}</h1>
              </div>

              <CardBody className="xl:px-3 xl:py-3 max-h-[200px] text-justify text-medium text-default-600">
                 <ScrollShadow>
                  <p className="text-space-dark">{fileContents[activity.title]}</p>
                </ScrollShadow> 
              </CardBody>

              <CardFooter className="gap-3 flex items-center justify-center">
                <p className="text-center text-red hover:text-[red]">Citeste mai mult</p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
