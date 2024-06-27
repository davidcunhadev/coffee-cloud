import CoffeeCard from "../CoffeeCard/CoffeeCard";

function DesktopPopularCoffees() {
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

	const getThreeCoffees = coffees.slice(0, 3);

	return (
		<div className="h-full bg-coffeeVariant1 bg-opacity-40 rounded-2xl p-4">
			<h1 className="text-coffeeVariant3 font-bold text-xl text-center pb-4">Popular <span className="border-b-2 border-coffeeVariant3">Now</span>
			</h1>
			<div className="">
				<div className="flex justify-evenly">
					{getThreeCoffees.map((item) => (
						<div key={item.id}>
							<CoffeeCard
								name={item.name}
								method={item.method}
								intensity={item.intensity}
								allVotes={item.allVotes}
								rate={item.rate}
								image={item.image}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default DesktopPopularCoffees;