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



export const Navbar = () => {


	return (
		<NextUINavbar position="sticky" >
			<NavbarContent className="flex items-center justify-end" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit ">
					<NextLink href="/">
						<p className="font-bold ">Space Otters</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden sm:flex flex-1 justify-end gap-4 ml-2">
					{siteConfig.navItems.map((item) => (
						<Button className="bg-transparent text-small" key={item.href} onClick={() => {
							const element = document.getElementById(item.href);
							element?.scrollIntoView({
								behavior: 'smooth',
							})

						}}>{item.label}</Button>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item) => (
						<Button className="bg-transparent" key={item.href} onClick={() => {
							const element = document.getElementById(item.href);
							element?.scrollIntoView({
								behavior: 'smooth',
							})

						}}>{item.label}</Button>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
