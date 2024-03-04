"use client"
import React from "react";
import { Card, CardFooter, Button, Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
export default function Members() {
  return (
    <div className="flex flex-col ] items-center justify-center max-w-7xl">
      <h1 className="text-[2.5rem] my-[1rem]">Members</h1>
      <div className="[&>*]:max-w-[250px] flex flex-col items-center justify-center m-auto flex-wrap sm:flex-row gap-[2.5rem]">
        {siteConfig.members_items.map((members) => (
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none "
            key={members.name}
          >
            <Image
              alt="Picture with a member"
              className="object-fit"
              height={siteConfig.members_img_sizes.height}
              src={`./members_photos/${members.image}`}
              width={siteConfig.members_img_sizes.width}
              // priority
              loading="lazy"
            />
            <CardFooter className=" justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className="flex flex-col">
                <p className="text-small text-white/80">{members.name}</p>
                <p className="text-tiny text-white/80">{members.status}</p>
              </div>


              <Link
                isExternal
                href={members.link}
                className="w-[65px]"
              >
                <Button className="bg-transparent rounded flex items-center justify-center w-[20px]" type="button">
                  <Image src={`./${siteConfig.instagram_icon.path}`} width={25} height={25} className="rounded" loading="lazy" alt="instagram icon" />

                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}

      </div>
    </div>
  );
}
