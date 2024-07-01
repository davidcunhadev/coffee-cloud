"use client";

import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, RefObject } from "react";

const coffees = [
	{
		id: 1,
		name: "Traditional Coffee",
		method: "Beans",
		intensity: "Mild",
		rate: "4.4",
		allVotes: 12,
		image: "/coffee1.png",
	},
	{
		id: 2,
		name: "Espresso",
		method: "Ground",
		intensity: "Intense",
		rate: "4.0",
		allVotes: 5,
		image: "/coffee2.png",
	},
	{
		id: 3,
		name: "Instant Coffee",
		method: "Instant",
		intensity: "Medium",
		rate: "4.2",
		allVotes: 8,
		image: "/coffee3.png",
	},
	{
		id: 4,
		name: "Cappuccino",
		method: "Ground",
		intensity: "Medium",
		rate: "5.0",
		allVotes: 10,
		image: "/coffee4.png",
	},
	{
		id: 5,
		name: "Decaf Coffee",
		method: "Ground",
		intensity: "Mild",
		rate: "4.8",
		allVotes: 21,
		image: "/coffee5.png",
	},
	{
		id: 6,
		name: "Traditional Coffee",
		method: "Beans",
		intensity: "Mild",
		rate: "4.4",
		allVotes: 12,
		image: "/coffee1.png",
	},
	{
		id: 7,
		name: "Espresso",
		method: "Ground",
		intensity: "Intense",
		rate: "4.0",
		allVotes: 5,
		image: "/coffee2.png",
	},
	{
		id: 8,
		name: "Instant Coffee",
		method: "Instant",
		intensity: "Medium",
		rate: "4.2",
		allVotes: 8,
		image: "/coffee3.png",
	},
	{
		id: 9,
		name: "Cappuccino",
		method: "Ground",
		intensity: "Medium",
		rate: "5.0",
		allVotes: 10,
		image: "/coffee4.png",
	}
];

function MobileCarouselPopularCoffees() {
	const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
		}
	}, []);

	return (
		<div className="h-full bg-coffeeVariant1 bg-opacity-40 rounded-2xl p-2">
			<h1 className="text-coffeeVariant3 font-bold text-center pb-2 xs:text-xs sm:text-xl">Popular <span className="border-b-2 border-coffeeVariant3">Now</span>
			</h1>
			<motion.div
				ref={carouselRef}
				whileTap={{ cursor: "grabbing" }}
				className="overflow-hidden cursor-grab">
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="flex space-x-4">
					{coffees.map((item) => (
						<motion.div key={item.id} className="xs:min-w-[130px] sm:min-w-[200px]">
							<CoffeeCard
								name={item.name}
								method={item.method}
								intensity={item.intensity}
								allVotes={item.allVotes}
								rate={item.rate}
								image={item.image}/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default MobileCarouselPopularCoffees;
