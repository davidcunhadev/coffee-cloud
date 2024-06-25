import * as LucideIcons from "lucide-react";

export type IconNames = keyof typeof LucideIcons;

type IconProp = {
    iconname: IconNames;
    color?: string;
    fill?: string;
    size?: number;
    className?: string;
    title?:string
};
const Icon = (iconProps: IconProp) => {
	const IconComponent = (LucideIcons as any)[iconProps.iconname];

	return IconComponent ? <IconComponent {...iconProps}/> : <span>Ícon not found</span>;
};

export default Icon;