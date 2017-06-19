import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductList from "./../products/ProductsList"
import ProductSidebar from "./../products/productSidebar"
import ProductHeader from "./../products/productHeader"
import Pagination from "./../products/Pagination"
import { fetchProducts } from "./../../actions/productsAction"
import PagesHeader from "./../template/pagesHeader"

class ProductsPage extends Component {
	constructor(){
		super();

		this.state = {
			currentPage:1,
			productsPerPage:3,
			selectedCategoryId:0 
		}
		this.handlePagination = this.handlePagination.bind(this);
		this.changeCategory = this.changeCategory.bind(this);
	}

	  handlePagination(event) {
	    this.setState({
	      currentPage: Number(event.target.id)
	    });
	  }

	  changeCategory (categoryId){
	  	this.setState({
	  		selectedCategoryId:categoryId
	  	})

	  	console.log("categoryId ", categoryId);
	  }

	componentDidMount(){
		console.log("componentDidMount");
		this.props.fetchProducts();

	}

	handleProductLength(productL){
		console.log("handleProductLength", productL);
	}
  render() {

     const { currentPage, productsPerPage, selectedCategoryId } = this.state;

     const {products} = this.props;


     //if statment with selectedcategoryid
     const productLength = products.length ;


    return (
    	<main id="mt-main">

    		<PagesHeader />

    		<div class="container">
    			<div class="row">

	    			<ProductSidebar changeCategory={this.changeCategory} selectedCategoryId={selectedCategoryId} categouries={this.props.categouries} />

				<div class="col-xs-12 col-sm-8 col-md-9 wow fadeInRight" data-wow-delay="0.4s">


					<ProductHeader />
						
				

					<ProductList 
						selectedCategoryId={selectedCategoryId} 
						products={products} 
						currentPage= {currentPage}
						productsPerPage= {productsPerPage}
						handleProductLength = {this.handleProductLength}
					/>

					<Pagination productLength={productLength} handlePagination={this.handlePagination} />

				</div>
    			</div>
    		</div>


     	 </ main>
    );
  }
}

ProductsPage.propTypes = {
	products: React.PropTypes.array.isRequired,
	categouries: React.PropTypes.array.isRequired,
	fetchProducts : React.PropTypes.func.isRequired
}

function mapStateToProps(state){
	return{
		products : state.products,
		categouries : state.categouries
	}
}

export default connect(mapStateToProps, { fetchProducts } )(ProductsPage);
