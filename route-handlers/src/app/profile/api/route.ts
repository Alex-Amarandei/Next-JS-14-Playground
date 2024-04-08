import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const headerList = headers();
	console.log(headerList.get("Authorization"));

	cookies().set("resultsPerPage", "20");

	const theme = cookies().get("theme");
	console.log(theme);

	return new Response("<h1>Profile</h1>", {
		headers: {
			"Content-Type": "text/html",
			"Set-Cookie": "theme=dark",
		},
	});
}
