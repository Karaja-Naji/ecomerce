import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveCategory } from "./../../actions/categouriesAction"
import { Redirect } from "react-router";

class CategoryForm extends Component {
	state = {
		title:"",
		errors:{},
		loading : false,
		done : false
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit = (e) => {
		e.preventDefault();

		let errors = {};

		if (this.state.title === "") errors.title="Title can not be empty";

		this.setState({errors});

		//this is valid have to be from the servier 
		const isValid= true;

		if (isValid){
			const {title} = this.state;
			this.setState({ loading:true });
			this.props.saveCategory({title})
			.then((response) => {
				this.setState({done:true});
		    	console.log("response xxx");
		      //dispatch(setProducts(response.data.products));

		    })
		    .catch((error) => {
		    	console.log("response errr");
		    	let errors={global:"response errr"};
		    	this.setState({errors});
		      //errorHandler(dispatch, error.response, AUTH_ERROR);
		    });
		}
	}
  render() {
    
    	const form = (
		      <form onSubmit={this.handleSubmit}>
		      	<h1>Add New Category</h1>

		      	{this.state.errors.global}

		      	<div className="field">
		      		<label htmlFor="title">Title</label>
		      		<input 
			      		name="title"
			      		value={this.state.title}
			      		onChange={this.handleChange}
			      		id="title" 
		      		/>
		      		<span>{this.state.errors.title}</span>
		      	</div>


		      	<div className="field">
		     		<button className="formButton"> Add Category </button>
		      	</div>
		      	<h1>{this.state.loading}</h1>
		      </form>
		     );
    	
    return (
    	<div>
    		{ form }
    	</div>

    );
  }
}

export default connect(null, {saveCategory})(CategoryForm);
