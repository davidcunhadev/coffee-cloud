export const formatLikesNumber = (likes: number) => {
	return Math.floor(likes / Math.pow(10, 3));
};