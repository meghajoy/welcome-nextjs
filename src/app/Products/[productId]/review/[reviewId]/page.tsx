import { notFound } from "next/navigation";
export default function page({params}:{params: {productId: string; reviewId: string}}) {
  if (parseInt(params.reviewId) > 1000){
    notFound();
  }
  return (
    <div>
      <h1>Reviews {params.reviewId} of Product {params.productId} </h1>
    </div>
    
  )
}
