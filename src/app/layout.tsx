import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@/lib/recoilContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Coffee Cloud",
	description: "Explore the world of premium coffees at Coffee Cloud. Discover an exclusive selection of artisanal coffee beans, special blends, and coffee accessories, all delivered to your door. Make every cup a unique experience with our carefully selected coffees from farms around the world.",
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RecoilContextProvider>
					{children}
				</RecoilContextProvider>
			</body>
		</html>
	);
}
