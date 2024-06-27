import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text?: string
  icon?: React.ReactNode
}

function Button({ text, icon, ...restProps }: ButtonProps) {
	return (
		<button {...restProps}>
			{text && text}
			{icon && <span className="bg-coffeeVariant1 hover:bg-coffeeVariant2 p-2 rounded-full">{icon}</span>}
		</button>
	);
}

export default Button;