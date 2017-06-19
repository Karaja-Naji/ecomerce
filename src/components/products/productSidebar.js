import React, {Component } from "react"

class ProductSidebar extends Component {


     handleCategories(category){
     	
     	this.props.changeCategory(category);
     }

     render(){
     	const { categouries, selectedCategoryId } = this.props;
     	console.log("categouries sidebar ", categouries);
     	const categouriesList = (
     		<ul class="list-unstyled category-list">
     		{ categouries.map(category => {
     			return (
     				<li key={category.id}>
		                                 <a href="javascript:void(0)" id={category.id} onClick={() => this.handleCategories(category.id)}>
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
                                 <a href="javascript:void(0)" onClick={() => this.handleCategories(0)}>
                                 <span class="name">ALL</span>
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