import React from "react";
import ProductCard from "./productCard"

export default function ProductsList({products}) {
  
  const emptyMessage = (
    <p>There is no Products </p>
    );

  const productList = (

    <p> Products List 
     { products.map( product => <ProductCard key={product.id} product={product} />) }

    </p>
  );

  return (
    <div>
      {products.lenght === 0 ? emptyMessage : productList}
    </div>
  );
}

ProductsList.propTypes = {
  products : React.PropTypes.array.isRequired
}