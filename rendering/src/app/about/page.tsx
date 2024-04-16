import { cookies } from "next/headers";

export default function About() {
	const cookieStore = cookies();
	const theme = cookieStore.get("theme");
	console.log({ theme });

	return <h1>About {new Date().toLocaleTimeString()}</h1>;
}
