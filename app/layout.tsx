"use client"
import "@/styles/globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import localFont from '@next/font/local'
import Page from "./not-found";

const roca = localFont({
  src: [
    {
      path: '../public/fonts/Roca Black.ttf',
      weight: '500'
    },
  ],
  variable: '--font-roca'
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head >
			<link rel="icon" href={`../logo/${siteConfig.logo}`} sizes="any" className="rounded-full" />
				<title>{siteConfig.name}</title>
			</head>
			<body
				className={`${roca.variable} font-sans`}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<Page/>
				</Providers>
			</body>
		</html>
	);
}
