import Image from "next/image";
import Link from "next/link";
import Icon from "../Icons";

function Nav() {
	return (
		<header className="flex w-full justify-between bg-coffeeVariant1 xs:py-1 xs:px-0 sm:p-2 4xl:px-12">
			<Link className="hidden w-28 xl:flex" href='/'>
				<Image src='/logo.svg' alt="Logo" width={105} height={105} quality={100} />
			</Link>
			<nav className="flex">
				<ul className="flex self-center cursor-pointer xs:gap-0 sm:gap-2 8xl:gap-16">
					<li className="flex items-center hover:bg-zinc-800 rounded-md py-1 px-2 transition-all delay-75 hover:text-zinc-200">
						<Link href='/'>
							<span className="hidden xl:flex">Home</span>
							<Icon className="xl:hidden" iconname="House" />
						</Link>
					</li>
					<li className="flex items-center hover:bg-zinc-800 rounded-md py-1 px-2 transition-all delay-75 hover:text-zinc-200">
						<Link href='/menu'>
							<span className="hidden xl:flex">Explore Our Coffees</span>
							<Icon className="xl:hidden" iconname="Coffee" />
						</Link>
					</li>
					<li className="flex items-center hover:bg-zinc-800 rounded-md py-1 px-2 transition-all delay-75 hover:text-zinc-200">
						<Link href='/about'>
							<span className="hidden xl:flex">About</span>
							<Icon className="xl:hidden" iconname="Info" />
						</Link>
					</li>
					<li>
						<button className="bg-zinc-800 text-nowrap text-white font-bold rounded-md py-1 px-4 overflow-hidden hover:bg-gradient-to-r hover:from-zinc-800 hover:to-yellow-800 hover:text-coffeeVariant1 transition-all duration-500" type="button">Order Now!</button>
					</li>
				</ul>
			</nav>
			<div className="flex items-center">
				<Icon className="hidden xl:flex size-10" iconname="User"/>
				<div className="flex flex-col">
					<h3 className="hidden xl:flex text-black pl-2 font-medium">Hello!</h3>
					<nav className="flex 4xl:gap-1">
						<Link href='/login' className="transition-all hover:bg-zinc-800 hover:rounded-md hover:text-zinc-200 px-2">
							<span className="hidden xl:flex">Login</span>
							<Icon className="xl:hidden" iconname="LogIn" />
						</Link>
						<span className="hidden xl:flex">or</span>
						<Link href='/register' className="transition-all hover:bg-zinc-800 hover:rounded-md hover:text-zinc-200 px-2">
							<span className="hidden xl:flex">Sign Up</span>
							<Icon className="xl:hidden" iconname="DoorOpen" />
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Nav;