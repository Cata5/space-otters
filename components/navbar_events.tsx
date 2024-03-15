import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

const Navbar_Ev = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();

    const handleSmoothScroll = (href: string) => {
        router.push("/");
        setTimeout(() => {
            const target = document.getElementById(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }, 500); // Adjust this delay as needed
        setNav(false); // Close the menu after clicking a link
    };

    return (
        <div
            className={`flex xl:justify-center justify-between  items-center h-20 px-4 bg-space-light fixed w-full shadow-xl z-[100]  ${nav ? "py-4" : ""
                }`}
        >
            <div className="flex items-center gap-[20rem]">
                <h1 className="text-2xl font-semibold text-space-dark">
                    <Button
                        className="bg-transparent text-space-dark h-[60px]"
                        onClick={() => handleSmoothScroll("/")}
                    >
                        <Image src={'../logo/Logo_Space_dark.png'} alt="" width={90} height={50} />
                    </Button>
                </h1>

                <ul className="hidden xl:flex ml-8 space-x-4">
                    {siteConfig.navItems.map(({ label, href }) => (
                        <li key={label} className="py-4 text-lg cursor-pointer">
                            {href === 'evenimente' ? (
                                <Dropdown className="bg-space-light hover:bg-transparent">
                                    <DropdownTrigger>
                                        <Button className="bg-transparent text-space-dark">
                                            {label}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Dynamic Actions" >
                                        {siteConfig.activity.map((title, index) => (
                                            <DropdownItem key={index} className="!bg-space-light hover:border-0">
                                                <Button variant='light' className="!hover:bg-transparent  !bg-space-light text-space-dark" onClick={() => router.push(`/evenimente/${title.href}`)}>
                                                    {title.title}
                                                </Button>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <Button
                                    className="bg-transparent text-space-dark"
                                    onClick={() => handleSmoothScroll(href)}
                                >
                                    {label}
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer text-space-dark xl:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul
                    className={`flex flex-col items-center absolute top-[80px] left-0 w-full h-screen bg-space-light text-space-dark ${nav ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {siteConfig.navItems.map(({ label, href }) => (
                        <li key={label} className="py-4 text-lg cursor-pointer">
                            {href === 'evenimente' ? (
                                <Dropdown >
                                    <DropdownTrigger>
                                        <Button className="bg-transparent text-space-dark">
                                            {label}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Dynamic Actions">
                                        {siteConfig.activity.map((title, index) => (
                                            <DropdownItem key={index}>
                                                <Button className="bg-transparent" onClick={() => router.push(`/evenimente/${title.href}`)}>
                                                    {title.title}
                                                </Button>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <Button
                                    className="bg-transparent text-space-dark"
                                    onClick={() => handleSmoothScroll(href)}
                                >
                                    {label}
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar_Ev;
