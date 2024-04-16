import "server-only";

export const serverSideFunction = () => {
	console.log("secret business logic");
	return "server result";
};
