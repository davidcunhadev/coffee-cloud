import { ICharacteristic } from "../characteristic/ICharacteristic";

export interface ICoffee {
  uuid: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  weight: string;
  rating: string;
  likes: number;
  slug: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  characteristic: ICharacteristic[]
}

export interface ICoffeeCardProps {
	name: string
	description?: string
	price?: string
	quantity?: number
	weight?: string
	rating?: string
	likes?: number
	imageUrl?: string
	method?: string
	intensity?: string
	brand?: string
}