import { ICoffee } from "@/interfaces/coffee/ICoffee";

export async function getCoffees() : Promise<{data: ICoffee[]}> {
	try {
		const response = await fetch("http://localhost:8000/api/coffees/");
		const data = await response.json();
	
		return data;
	} catch (error) {
		throw new Error("Error fetching coffees");
	}
}

export async function getCoffeeBySearchQuery(search: string) : Promise<ICoffee[]> {
	try {
		const response = await fetch(`http://localhost:8000/api/coffees/search?q=${search}`);
		const data = await response.json();
		
		return data;
	} catch (error) {
		throw new Error("Error fetching coffees");
	}
}