import React, {Component } from "react"

class ProductSidebar extends Component {

     render(){
	return (
	    <aside id="sidebar" class="col-xs-12 col-sm-4 col-md-3 wow fadeInLeft" data-wow-delay="0.4s">


		<section class="shop-widget">
                           <h2>CATEGORIES</h2>
                           
                           <ul class="list-unstyled category-list">
                              <li>
                                 <a href="#">
                                 <span class="name">CHAIRS</span>
                                 <span class="num">12</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                 <span class="name">SOFAS</span>
                                 <span class="num">24</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                 <span class="name">ARMCHAIRS</span>
                                 <span class="num">9</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                 <span class="name">BEDROOM</span>
                                 <span class="num">2</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                 <span class="name">LIGHTING</span>
                                 <span class="num">17</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                 <span class="name">KITCHEN</span>
                                 <span class="num">10</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                 <span class="name">ACCESSORIES</span>
                                 <span class="num">23</span>
                                 </a>
                              </li>
                           </ul>
                         
                        </section>

	    </aside>
		)
     }
}

export default ProductSidebar ;