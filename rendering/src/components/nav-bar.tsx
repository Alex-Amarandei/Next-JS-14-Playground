import Navlinks from "./nav-links";
import Navsearch from "./nav-search";

export default function Navbar() {
	console.log("Navbar");

	return (
		<>
			<Navlinks />
			<Navsearch />
			<h1>Navbar</h1>
		</>
	);
}
