import Link from "next/link";

export default function F4() {
	return (
		<>
			<h1>F4 Page</h1>
			<div>
				<h2>
					<Link href="/f1/f3">Go to F3</Link>
				</h2>
				<h2>
					<Link href="/about">Go to About</Link>
				</h2>
			</div>
		</>
	);
}
