import Image from "next/image";
import Button from "../Button/Button";
import Icon from "../Icons";

type CoffeeCardProps = {
  name: string
  description?: string
  price?: string
  quantity?: number
  weight?: string
  rate?: string
  allVotes: number
  image?: string
  method?: string
  intensity?: string
  brand?: string
}

function CoffeeCard({name, intensity, method, rate, allVotes ,image}: CoffeeCardProps) {
	return (
		<div className="relative text-coffeeVariant3 bg-opacity-50 bg-white rounded-md p-2">
			<div className="absolute z-10 left-[140px] top-3 bg-white rounded-full bg-opacity-50 py-1 px-1 4xl:left-[196px]">
				<span className="flex items-center gap-1 font-bold text-xs rounded-full bg-white px-1 py-1 4xl:text-sm">{rate} <Icon className="4xl:size-4" iconname="Star" color="rgb(211, 190, 0)" fill="rgb(211, 190, 0)" size={10} /></span>
			</div>
			<Image src={image ?? "Image not found"} alt="Coffee Image" width={250} height={250}/>
			<h3 className="truncate font-semibold">{name} <span className="hidden 4xl:inline">{allVotes} K</span></h3>
			<div className="flex justify-between">
				<div className="flex flex-col justify-between gap-2">
					<p className="bg-coffeeVariant1 bg-opacity-40 rounded-md">{method}</p>
					<p className="bg-coffeeVariant1 bg-opacity-40 rounded-md">{intensity}</p>
				</div>
				<Button className="flex items-center font-bold transition-all delay-75" icon={<Icon className="text-white 4xl:size-6" iconname="ShoppingCart" size={16} />} />
			</div>
		</div>
	);
}

export default CoffeeCard;