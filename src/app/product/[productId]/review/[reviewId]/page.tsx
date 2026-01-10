import { notFound, redirect } from "next/navigation";

export default async function ReviewDetails({params} : 
  {params : {reviewId:string; productId: string}}){
    const {reviewId, productId} = await params

    const getRandomNumber = (count: number) => {
      return Math.floor(Math.random() * count)
    }

    const randomNumber = getRandomNumber(2)

    if(randomNumber === 1){
      throw new Error("ERROR LOADING REVIEW")
    }

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
