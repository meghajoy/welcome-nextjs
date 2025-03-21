export default function page({params}:{params: {productId: string}}) {
  return (
    <h1>Product lists of {params.productId} </h1>
  )
}
