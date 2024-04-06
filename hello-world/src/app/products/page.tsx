import Link from "next/link";

export default function Products() {
	const productId = 100;

	return (
		<>
			<Link href="/">Home</Link>
			<h2>
				<Link href="/products/1">Product 1</Link>
			</h2>
			<h2>
				<Link href="/products/2">Product 2</Link>
			</h2>
			<h2>
				<Link href={`/products/${productId}`} replace>
					Product {productId}
				</Link>
			</h2>
		</>
	);
}
