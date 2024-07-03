import { ICoffee } from "@/interfaces/coffee/ICoffee";
import { atom } from "recoil";

export const coffeeState = atom({
	key: "coffees",
	default: <ICoffee[]>[] 
});