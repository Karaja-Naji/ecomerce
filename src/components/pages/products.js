import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductList from "./../products/ProductsList"
import { fetchProducts } from "./../../actions/productsAction"

class ProductsPage extends Component {
	componentDidMount(){
		console.log("componentDidMount");
		this.props.fetchProducts();

	}
  render() {
    return (
    	<div>
      		<h1>Productsxx.</h1>

      		<ProductList products={this.props.products}/>
      </div>
    );
  }
}

ProductsPage.propTypes = {
	products: React.PropTypes.array.isRequired,
	fetchProducts : React.PropTypes.func.isRequired
}

function mapStateToProps(state){
	return{
		products : state.products
	}
}

export default connect(mapStateToProps, { fetchProducts } )(ProductsPage);
