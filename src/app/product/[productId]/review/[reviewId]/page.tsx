import { notFound, redirect } from "next/navigation";

export default async function ReviewDetails({params} : 
  {params : {reviewId:string; productId: string}}){
    const {reviewId, productId} = await params
    if (parseInt(reviewId) > 1000) {
      // notFound();
      redirect("/product")
    }
  return (
    <div>
      <h1>Review Details for id:{reviewId} of product id: {productId}</h1>
    </div>
  );
}
