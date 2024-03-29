import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function Sponsors() {
    return (
        <div className="flex flex-col items-center justify-center max-w-6xl mx-[1rem] gap-[2rem]">
        <h1 className="text-[2.5rem] my-[1rem]">Sponsori</h1>
        <div className=" flex flex-row items-center justify-center gap-[1rem] flex-wrap m-auto">
        {siteConfig.sponsors_items.map((sponsors) => (
            <Card key={sponsors.label} className="w-full  bg-space-light">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={sponsors.height}
                        radius="sm"
                        src={`./sponsors_photos/${sponsors.logo}`}
                        width={sponsors.width}
                        className="pr-[2rem]"
                    />
                    <div  className="flex flex-col">
                        <p className="text-3xl text-space-dark">{sponsors.label}</p>
                        <p className="text-small py-2 text-space-dark opacity-[.7]">{sponsors.website}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-space-dark">{sponsors.description}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href={sponsors.website_link}
                    >
                        Visit their website.
                    </Link>
                </CardFooter>
            </Card>))}</div>
        </div>
    );
}