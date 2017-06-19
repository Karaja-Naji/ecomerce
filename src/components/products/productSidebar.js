import React, {Component } from "react"

class ProductSidebar extends Component {

     render(){
     	const {categouries} = this.props;
     	console.log("categouries sidebar ", categouries);
     	const categouriesList = (
     		<ul class="list-unstyled category-list">
     		{ categouries.map(category => {
     			return (
     				        <li key={category.id}>
		                                 <a href="#">
		                                 <span class="name">{category.title}</span>
		                                 <span class="num">12</span>
		                                 </a>
		                              </li>
     				)
     		} ) }
     		</ul>
     		)
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
                              {categouriesList}
                           </ul>
                         
                        </section>

	    </aside>
		)
     }
}

ProductSidebar.propTypes = {
  categouries : React.PropTypes.array.isRequired
}

export default ProductSidebar ;