import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveProduct } from "./../../actions/productsAction"
import { Redirect } from "react-router";

class ProductForm extends Component {
	state = {
		title:"",
		name:"",
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
		if (this.state.name === "") errors.name="Title can not be empty";
		this.setState({errors});

		//this is valid have to be from the servier 
		const isValid= true;
		if (isValid){
			const {title, name} = this.state;
			this.setState({ loading:true });
			this.props.saveProduct({title, name})
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
		      	<h1>Add New Product</h1>

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
		      		<label htmlFor="name">Name</label>
		      		<input 
		      			name="name"
			      		value={this.state.name}
			      		onChange={this.handleChange}
		      			id="name" 
		      		/>
		      		<span>{this.state.errors.name}</span>
		      	</div>

		      	<div className="field">
		     		<button className="formButton"> Add </button>
		      	</div>
		      	<h1>{this.state.loading}</h1>
		      </form>
		     );
    	
    return (
    	<div>
    		{ this.state.done? <Redirect to="/products" />: form }
    	</div>

    );
  }
}

export default connect(null, {saveProduct})(ProductForm);
