import React from "react";
import ProductCard from "./productCard"

export default function ProductsList({products}) {
  
  const emptyMessage = (
    <p>There is no Products </p>
    );

  // const productList = (

    
  //    { products.map( product => <ProductCard key={product.id} product={product} />) }
     
    
  // );

  return (
    
      <ul class="mt-productlisthold list-inline">
       {products.length == 0 ? emptyMessage :  products.map( product => <ProductCard key={product.id} product={product} />)}
    </ul>
   
  );
}

ProductsList.propTypes = {
  products : React.PropTypes.array.isRequired
}