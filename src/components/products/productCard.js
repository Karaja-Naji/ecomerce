import React from "react";

export default function ProductCard({product}) {
  

  return (
	             
                  <div class="mt-product1 large">
                     <div class="box">
                        <div class="b1">
                           <div class="b2">
                              <a href="product-detail.html"><img src={"./../../public/images/products/img22.jpg"} alt="image description" /></a>
                              <ul class="mt-stars">
                                 <li><i class="fa fa-star"></i></li>
                                 <li><i class="fa fa-star"></i></li>
                                 <li><i class="fa fa-star"></i></li>
                                 <li><i class="fa fa-star-o"></i></li>
                              </ul>
                              <ul class="links">
                                 <li><a href="#"><i class="icon-handbag"></i><span>Add to Cart</span></a></li>
                                 <li><a href="#"><i class="icomoon icon-heart-empty"></i></a></li>
                                 <li><a href="#"><i class="icomoon icon-exchange"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="txt">
                        <strong class="title"><a href="product-detail.html">Bombi Chair</a></strong>
                        <span class="price"><i class="fa fa-eur"></i> <span>399,00</span></span>
                     </div>
                     
                  </div>
                 
              
  );
}

ProductCard.propTypes = {
  product : React.PropTypes.object.isRequired
}
