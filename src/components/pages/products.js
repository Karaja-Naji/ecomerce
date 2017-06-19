import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductList from "./../products/ProductsList"
import ProductSidebar from "./../products/productSidebar"
import { fetchProducts } from "./../../actions/productsAction"
import PagesHeader from "./../template/pagesHeader"

class ProductsPage extends Component {
	constructor(){
		super();

		this.state = {
			currentPage:1,
			productsPerPage:3
		}
		this.handlePagination = this.handlePagination.bind(this);
	}

	  handlePagination(event) {
	    this.setState({
	      currentPage: Number(event.target.id)
	    });
	  }

	componentDidMount(){
		console.log("componentDidMount");
		this.props.fetchProducts();

	}
  render() {

     const { currentPage, productsPerPage } = this.state;

     const {products} = this.props;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * productsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
    const activeProducts = products.slice(indexOfFirstTodo, indexOfLastTodo);

    console.log("activeProducts", activeProducts);

    const pageNumbers = [];

	for (var i =1; i <= Math.ceil(products.length / 3) ;  i++) {
		pageNumbers.push(i) 
	}

	console.log("pageNumbers", pageNumbers);
	console.log("categouries xx ", this.props.categouries);

    const pagination = (
    	<nav class="mt-pagination">
    	    <ul class="list-inline">
    	    	{ pageNumbers.map( number => {
    	    		return (
				<li key={number} ><a onClick={this.handlePagination} id={number}>{number} </a></li>
    	    			)
    	    		}

    	    	)}
    	    </ul>
	</nav>
    )

    return (
    	<main id="mt-main">

    		<PagesHeader />

    		<div class="container">
    			<div class="row">

	    			<ProductSidebar categouries={this.props.categouries} />

				<div class="col-xs-12 col-sm-8 col-md-9 wow fadeInRight" data-wow-delay="0.4s">

					<header class="mt-shoplist-header">
			                           
			                           <div class="btn-box">
			                              <ul class="list-inline">
			                                 <li>
			                                    <a href="#" class="drop-link">
			                                    Default Sorting <i aria-hidden="true" class="fa fa-angle-down"></i>
			                                    </a>
			                                    <div class="drop">
			                                       <ul class="list-unstyled">
			                                          <li><a href="#">ASC</a></li>
			                                          <li><a href="#">DSC</a></li>
			                                          <li><a href="#">Price</a></li>
			                                          <li><a href="#">Relevance</a></li>
			                                       </ul>
			                                    </div>
			                                 </li>
			                                 <li><a class="mt-viewswitcher" href="#"><i class="fa fa-th-large" aria-hidden="true"></i></a></li>
			                                 <li><a class="mt-viewswitcher" href="#"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
			                              </ul>
			                           </div>
		
			                           <div class="mt-textbox">
			                              <p>Showing  <strong>1–9</strong> of  <strong>65</strong> results</p>
			                              <p>View   <a href="#">9</a> / <a href="#">18</a> / <a href="#">27</a> / <a href="#">All</a></p>
			                           </div>
			                        
			                       </header>	
				

					<ProductList products={activeProducts} />

					{pagination}

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
