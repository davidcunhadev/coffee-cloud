export const resolveCarouselWidth = (width: number) => {
	let newWidth = 0;
	switch (width) {
	case 320:
		newWidth = 430;
		break;
	case 360:
		newWidth = 740;
		break;
	case 375:
		newWidth = 730;
		break;
	case 390:
		newWidth = 710;
		break;
	case 414:
		newWidth = 690;
		break;
	case 428:
		newWidth = 670;
		break;
	case 768:
		newWidth = 340;
		break;
	case 800:
		newWidth = 310;
		break;
	case 820:
		newWidth = 280;
		break;
	case 834:
		newWidth = 270;
		break;
    
	default:
		break;
	}
	return newWidth;
};