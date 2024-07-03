import { getCoffees } from "@/api/coffeeActions";
import { coffeeState } from "@/store/atoms/coffeeState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { formatLikesNumber } from "@/helper/formatLikesNumber";

function DesktopPopularCoffees() {
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
		<div className="h-full bg-coffeeVariant1 bg-opacity-40 rounded-2xl p-4">
			<h1 className="text-coffeeVariant3 font-bold text-xl text-center pb-4">Popular <span className="border-b-2 border-coffeeVariant3">Now</span>
			</h1>
			<div className="flex justify-evenly">
				{addingImageToCoffees.map((item) => (
					<div key={item.uuid}>
						<CoffeeCard
							name={item.name}
							method={item.characteristic[0].method}
							intensity={item.characteristic[0].intensity}
							likes={formatLikesNumber(item.likes)}
							rating={item.rating}
							imageUrl={item.imageUrl}/>
					</div>
				))}
			</div>
		</div>
	);
}

export default DesktopPopularCoffees;