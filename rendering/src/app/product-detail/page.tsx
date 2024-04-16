import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
	return (
		<div>
			<h1>Product detail page</h1>
			<Suspense fallback={<p>Loading product details...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading product reviews...</p>}>
				<Reviews />
			</Suspense>
		</div>
	);
}
