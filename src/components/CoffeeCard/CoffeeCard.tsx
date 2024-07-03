import { ICoffeeCardProps } from "@/interfaces/coffee/ICoffee";
import Button from "../Button/Button";
import Icon from "../Icons";
import Image from "next/image";

function CoffeeCard({ name, intensity, method, rating, likes, imageUrl }: ICoffeeCardProps) {
	return (
		<div className="relative text-coffeeVariant3 bg-opacity-50 bg-white rounded-md p-2 xs:w-[135px] sm:w-[200px]">
			<div className="absolute z-10 bg-white rounded-full bg-opacity-50 py-1 px-1 xs:left-[84px] xs:top-3 sm:left-[134px] 4xl:left-[130px]">
				<span className="flex items-center gap-1 font-bold rounded-full bg-white px-1 py-1 xs:text-[8px] sm:text-sm 4xl:text-sm">{rating} <Icon className="xs:size-2 sm:size-3 4xl:size-4" iconname="Star" color="rgb(211, 190, 0)" fill="rgb(211, 190, 0)" size={10} /></span>
			</div>
			<Image src={imageUrl ?? "Image not found"} alt="Coffee Image" width={window.innerWidth < 360 ? 135 : 250} height={window.innerWidth < 360 ? 135 : 250} />
			<div className="flex justify-between">
				<h3 className="truncate w-32 font-semibold xs:text-sm">{name}</h3>
				<span className="hidden font-semibold 4xl:flex 4xl:items-center">{likes} K <Icon iconname="ThumbsUp" size={14} /></span>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col justify-between gap-1 xs:text-xs sm:text-base">
					<p className="bg-coffeeVariant1 bg-opacity-40 rounded-md">{method}</p>
					<p className="bg-coffeeVariant1 bg-opacity-40 rounded-md">{intensity}</p>
				</div>
				<Button className="flex items-center font-bold transition-all delay-75"
					bgColor="bg-coffeeVariant1"
					hoverColor="bg-coffeeVariant2"
					padding="p-2"
					icon={<Icon className="text-white 4xl:size-6" iconname="ShoppingCart" size={16} />} />
			</div>
		</div>
	);
}

export default CoffeeCard;