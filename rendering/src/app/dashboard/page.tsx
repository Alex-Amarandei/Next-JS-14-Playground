"use client";

import { useState } from "react";

export default function Dashboard() {
	const [name, setName] = useState("");

	console.log("Hello Dashboard");

	return (
		<div>
			<h1>Dashboard</h1>
			<input style={{ color: "black" }} type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<p>Hello, {name}!</p>
		</div>
	);
}
