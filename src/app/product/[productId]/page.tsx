export default async function ProductDetails({params} : 
  {params : {productId:string}}){
    const {productId} = await params
  return (
    <div>
      <h1>Product Details Page - {productId}</h1>
    </div>
  );
}
