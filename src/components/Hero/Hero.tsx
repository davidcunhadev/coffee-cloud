"use client";

import Button from "../Button/Button";
import Icon from "../Icons";
import Image from "next/image";
import MobileCarouselPopularCoffees from "./MobileCarouselPopularCoffees";
import DesktopPopularCoffees from "./DesktopPopularCoffees";

function Hero() {
	
	return (
		<section className="flex flex-col gap-6 xl:gap-16 4xl:gap-0 bg-coffee-bg h-screen bg-cover bg-center">
			<div className="flex pb-6 4xl:gap-56" >
				<div className="flex flex-col text-white xl:gap-10 8xl:w-[60%]">
					<h1 className="text-3xl pt-12 pb-6 px-12 text-amber-700 4xl:text-6xl 8xl:p-20">Enjoy your <span className="text-coffeeVariant1">coffee</span> before your activity</h1>
					<p className="text-xl px-12 pb-6 text-zinc-400 4xl:text-3xl 8xl:text-4xl 8xl:px-20">Boost your productivity and build your mood with a glass of <span className="text-coffeeVariant1">coffee</span> in the morning!</p>
					<nav className="flex justify-around">
						<Button className="bg-coffeeVariant2 rounded-full items-center font-bold flex gap-2 px-4 py-2 hover:bg-yellow-900 transition-all delay-75 4xl:py-2 4xl:px-6" text="Order Now" icon={<Icon className="4xl:size-6" iconname="ShoppingCart" />} />
						<Button className="hover:bg-coffeeVariant2 text-coffeeVariant1 rounded-full font-bold px-4 py-2 transition-all delay-75" text="More Menu" />
					</nav>
				</div>
				<div className="hidden 4xl:flex relative text-coffeeVariant2 4xl:px-28 4xl:top-12 8xl:px-52">
					<div className="absolute z-10 right-52 bg-white rounded-full bg-opacity-50 py-1 px-1 4xl:right-40 8xl:right-64">
						<span className="flex items-center gap-1 font-bold text-xs rounded-full bg-white px-4 py-2 4xl:text-sm">Cappuccino <Icon className="4xl:size-4" iconname="Coffee" color="rgb(47, 32, 5)" fill="rgb(119, 79, 5)" size={18} /></span>
					</div>
					<div className="absolute z-10 right-16 bg-white rounded-full bg-opacity-50 py-1 px-1 4xl:right-10 8xl:right-24">
						<span className="flex items-center gap-1 font-bold text-xs rounded-full bg-white px-4 py-2 4xl:text-sm">4.8 <Icon className="4xl:size-4" iconname="Star" color="rgb(211, 190, 0)" fill="rgb(211, 190, 0)" size={18} /></span>
					</div>
					<div className="absolute z-10 right-[9.5rem] bg-white rounded-full bg-opacity-50 py-1 px-1 4xl:right-32 4xl:top-[12rem] 8xl:top-[20rem] 8xl:right-48">
						<span className="flex items-center gap-1 font-bold text-xs rounded-full bg-white px-4 py-2 4xl:text-sm">18k <Icon className="4xl:size-4" iconname="Heart" color="rgb(240, 60, 60)" fill="rgb(240, 60, 60)" size={18} /></span>
					</div>
					<Image className="border-coffeeVariant3 absolute right-12 border-[20px] rounded-full" src='/cappuccino.png' alt="Cappuccino" width={350} height={350}/>
				</div>
			</div>
			<div>
				{window.innerWidth < 1280 ? (
					<MobileCarouselPopularCoffees />
				) : <DesktopPopularCoffees />}
			</div>
		</section>
	);
}

export default Hero;