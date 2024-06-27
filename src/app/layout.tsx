import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@/lib/recoilContext";
import Nav from "@/components/Navigation/Nav";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

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
			<body className={`${poppins.className}`}>
				<RecoilContextProvider>
					<Nav />
					{children}
				</RecoilContextProvider>
			</body>
		</html>
	);
}
