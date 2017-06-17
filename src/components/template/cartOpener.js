import React, { Component } from "react"

class CartOpener extends Component {

     render(){
	return (
		<li class="drop">
		   <a href="#" class="cart-opener">
		   <span class="icon-handbag"></span>
		   <span class="num">3</span>
		   </a>
		  
		   <div class="mt-drop">
		      
		      <div class="mt-drop-sub">
		         
		         <div class="mt-side-widget">
		            
		            <div class="cart-row">
		               <a href="#" class="img"><img src={'./../../public/images/products/img36.jpg'} class="img-responsive" /></a>
		               <div class="mt-h">
		                  <span class="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
		                  <span class="price"><i class="fa fa-eur" aria-hidden="true"></i> 599,00</span>
		                  <span class="mt-h-title">Qty: 1</span>
		               </div>
		               <a href="#" class="close fa fa-times"></a>
		            </div>
		  
		            <div class="cart-row">
		               <a href="#" class="img"><img src={"./../../public/images/products/img37.jpg"} alt="image" class="img-responsive" /></a>
		               <div class="mt-h">
		                  <span class="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
		                  <span class="price"><i class="fa fa-eur" aria-hidden="true"></i> 599,00</span>
		                  <span class="mt-h-title">Qty: 1</span>
		               </div>
		               <a href="#" class="close fa fa-times"></a>
		            </div>
		  
		            <div class="cart-row">
		               <a href="#" class="img"><img src={"./../../public/images/products/img38.jpg"} alt="image" class="img-responsive" /></a>
		               <div class="mt-h">
		                  <span class="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
		                  <span class="price"><i class="fa fa-eur" aria-hidden="true"></i> 599,00</span>
		                  <span class="mt-h-title">Qty: 1</span>
		               </div>
		               <a href="#" class="close fa fa-times"></a>
		            </div>
		       
		            <div class="cart-row-total">
		               <span class="mt-total">Sub Total</span>
		               <span class="mt-total-txt"><i class="fa fa-eur" aria-hidden="true"></i> 799,00</span>
		            </div>
		            
		            <div class="cart-btn-row">
		               <a href="#" class="btn-type2">VIEW CART</a>
		               <a href="#" class="btn-type3">CHECKOUT</a>
		            </div>
		         </div>
		         
		      </div>
		     
		   </div>
		 
		   <span class="mt-mdropover"></span>
		</li>
	)
     }
}

export default CartOpener ;