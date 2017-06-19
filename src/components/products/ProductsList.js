import React from "react";
import ProductCard from "./productCard"

export default function ProductsList({products, currentPage, productsPerPage, selectedCategoryId, handleProductLength}) {



  //   renderSubCategories() {
  //    const { selectedCategoryId, items } = this.props;
  //   // This is the key to filtering based on selectedCategoryId
  //   return items.filter(item => {
  //     // Checking all the categories in the item's categories array
  //     // against the selectedCategoryId passed in from props
  //     return item.categories.some(category => {
  //       return category.id === selectedCategoryId;
  //     });
  //   })
  //   .map(item => {
  //     const { title, link, id } = item;
  //     return (
  //       <NavigationSubCategoryLink
  //         key={id}
  //         name={title}
  //         link={link} />
  //     );
  //   });
  // }


  // console.log("selectedCategoryId", selectedCategoryId);

  const filterdProducts =  products.filter(product => {

        return product.category.id === selectedCategoryId;
      
    });

   handleProductLength(filterdProducts.length);

  console.log("products", filterdProducts);
  
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * productsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
    const activeProducts = filterdProducts.slice(indexOfFirstTodo, indexOfLastTodo);


  const emptyMessage = (
    <p>There is no Products </p>
    );

  // const productList = (

    
  //    { products.map( product => <ProductCard key={product.id} product={product} />) }
     
    
  // );

  return (
    
      <ul class="mt-productlisthold list-inline">
       {activeProducts.length == 0 ? emptyMessage :  activeProducts.map( product =><ProductCard key={product.id} product={product} />)}
    </ul>
   
  );
}

ProductsList.propTypes = {
  products : React.PropTypes.array.isRequired
}