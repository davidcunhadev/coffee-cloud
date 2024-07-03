"use client";

import { coffeeState } from "@/store/atoms/coffeeState";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { motion } from "framer-motion";
import { useRef, useEffect, RefObject } from "react";
import { useRecoilState } from "recoil";
import { getCoffees } from "@/api/coffeeActions";
import { useWidth } from "@/hooks/useWidth";
import { resolveCarouselWidth } from "@/helper/resolveCarouselWidth";

function MobileCarouselPopularCoffees() {
	const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const {width} = useWidth();
	const [coffees, setCoffees] = useRecoilState(coffeeState);

	useEffect(() => {
		const fetchCoffees = async () => {
			const allCoffees = await getCoffees();
			
			setCoffees(allCoffees.data);
		};
		fetchCoffees();
	}, []);

	const getFiveCoffees = coffees.slice(0, 5);
	const addingImageToCoffees = getFiveCoffees.map((item, index) => {
		return {
			...item,
			imageUrl: `/coffee${index + 1}.png`
		};
	});

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
					dragConstraints={{ right: 0, left: -resolveCarouselWidth(width) }}
					className="flex space-x-4">
					{addingImageToCoffees.map((item) => (
						<motion.div key={item.uuid} className="xs:min-w-[130px] sm:min-w-[200px]">
							<CoffeeCard
								name={item.name}
								method={item.characteristic[0].method}
								intensity={item.characteristic[0].intensity}
								rating={item.rating}
								imageUrl={item.imageUrl}/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default MobileCarouselPopularCoffees;
