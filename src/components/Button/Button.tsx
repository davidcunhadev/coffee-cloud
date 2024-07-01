import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text?: string
  icon?: React.ReactNode
	bgColor?: string
	hoverColor?: string
	padding?: string
}

function Button({ text, icon, bgColor, hoverColor, padding, ...restProps }: ButtonProps) {
	return (
		<button {...restProps}>
			{text && text}
			{icon && <span className={`${bgColor} hover:${hoverColor} ${padding}  rounded-full`}>{icon}</span>}
		</button>
	);
}

export default Button;