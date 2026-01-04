import React from 'react'

const Products = async ({params} : {params : {id: string}}) => {

    const {id} = await params;
  return (
    <>
      Products: {id}
    </>
  )
}

export default Products
