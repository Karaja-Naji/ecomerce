export const SET_PRODUCTS = "SET_PRODUCTS";
import axios from "axios";

var url = "http://localhost:8080/myNextProject/public/api/products";

export function fetchProducts() {
	return dispatch => {
	console.log("fetchProducts xx ");
	axios.get(url)
	    .then((response) => {
	    	console.log(response);
	      dispatch(setProducts(response.data.products));

	    })
	    .catch((error) => {
	      errorHandler(dispatch, error.response, AUTH_ERROR);
	    });
	}
	
	
}

export function saveProduct(product){
	return dispatch => {
		console.log("saveProduct xx ", product);
		return axios.post(url, product)
		    // .then((response) => {
		    // 	console.log(response);
		    //   //dispatch(setProducts(response.data.products));

		    // })
		    // .catch((error) => {
		    //   //errorHandler(dispatch, error.response, AUTH_ERROR);
		    // });
	}
}

export function setProducts(products){
	return {
		type : SET_PRODUCTS,
		products
	}
}