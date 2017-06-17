export const SET_CATEGOURIES = "SET_CATEGOURIES", ADD_CAREGORY = "ADD_CAREGORY" ;
import axios from "axios";

var url = "http://localhost:8080/myNextProject/public/api/category";

export function fetchCategouries() {
	return dispatch => {
	console.log("fetchCategouries xx ");
	axios.get(url)
	    .then((response) => {
	    	console.log(response);
	      dispatch(setCategouries(response.data.categories));

	    })
	    .catch((error) => {
	    	console.log(error);
	      //errorHandler(dispatch, error.response, AUTH_ERROR);
	    });
	}
	
	
}

export function saveCategory(category){
	return dispatch => {
		dispatch(addCategory(category));
		console.log("saveProduct xx ", category);
		return axios.post(url, category)
	}
}

export function setCategouries(categouries){
	return {
		type : SET_CATEGOURIES,
		categouries
	}
}

export function addCategory(category){
	return {
		type:ADD_CAREGORY,
		category
	}
}