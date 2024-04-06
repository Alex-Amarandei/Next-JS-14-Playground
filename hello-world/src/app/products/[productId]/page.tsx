export default function ProductDetails({ params }: {
    params: { productId: string }
})
{
    return <h1>Product Details for Product {params.productId} </h1>
}
