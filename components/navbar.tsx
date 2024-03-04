import { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NextUINavbar position="sticky" className="bg-space-light" shouldHideOnScroll>
      <NavbarContent className="hidden items-center justify-end md:flex text-space-dark" justify="start">
        <NavbarBrand as="li" className="gap-3">
          <NextLink href="/">
            <Image src="./logo/Logo_Space_dark.png" width={90} height={50} alt="" priority />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex flex-1 justify-end gap-4 ml-2">
          {siteConfig.navItems.map((item) => (
            <Button
              className="bg-transparent text-small text-space-dark"
              key={item.href}
              onClick={() => {
                const element = document.getElementById(item.href);
                element?.scrollIntoView({
                  behavior: 'smooth',
                });
                closeMenu(); // Close the menu when an item is clicked
              }}
            >
              {item.label}
            </Button>
          ))}
        </ul>
      </NavbarContent>

      {/* Button to toggle the menu */}
      <NavbarContent className="md:hidden flex">
        <NavbarBrand as="li" className=" flex items-center justify-center m-auto ml-[3.5rem]">
          <NextLink href="/">
            <Image src="./logo/Logo_Space_dark.png" width={90} height={50} alt=""  priority/>
          </NextLink>
        </NavbarBrand>
        <Button
          className="bg-transparent text-small text-space-dark"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
              onClick={closeMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </Button>
      </NavbarContent>

      <NavbarMenu className={`fixed top-0 left-0 w-full h-full bg-gray-800 transition-opacity ease-in-out duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <NavbarMenuToggle onClick={toggleMenu} />
        <ul className="flex flex-col items-center justify-center h-full">
          {siteConfig.navItems.map((item) => (
            <Button
              className="bg-transparent text-small text-space-dark mb-4"
              key={item.href}
              onClick={() => {
                const element = document.getElementById(item.href);
                element?.scrollIntoView({
                  behavior: 'smooth',
                });
                closeMenu();
              }}
            >
              {item.label}
            </Button>
          ))}
        </ul>
      </NavbarMenu>
    </NextUINavbar>
  );
};
