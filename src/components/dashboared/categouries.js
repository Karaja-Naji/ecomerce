import React, { Component } from 'react';
import { connect } from "react-redux";
//import CategouriesList from "./../products/CategouriesList"
import { fetchCategouries } from "./../../actions/categouriesAction"
import CategoryForm from "./categoryForm"

class CategouriesPage extends Component {

	// componentDidMount(){
	// 	console.log("componentDidMount fetchCategouries");
	// 	this.props.fetchCategouries();

	// }


  render() {
  	let {categouries} = this.props;
  		const errorMessage = (
			<h1>there is no categouries</h1>
		);

		console.log("categouries ++ ", categouries);

	const categoryDropDown = (

			<select id = "dropdown">

			{categouries.map(category => <option key={category.id}> {category.title} </option>)}

            </select>
		)

    return (
    	<div>
      		<h1>Categouries .</h1>
      		{categouries.length?categoryDropDown : errorMessage}

      		<h1>Add Category Form </h1>

      		<CategoryForm />

      		
      </div>
    );
  }
}

CategouriesPage.propTypes = {
	categouries: React.PropTypes.array.isRequired,
	fetchCategouries : React.PropTypes.func.isRequired
}

function mapStateToProps(state){
	return{
		categouries : state.categouries
	}
}

export default connect(mapStateToProps, { fetchCategouries } )(CategouriesPage);
