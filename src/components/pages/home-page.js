import React, { Component } from 'react';
import { fetchCategouries } from "./../../actions/categouriesAction"
import {connect} from "react-redux"

class HomePage extends Component {

	componentDidMount(){
		console.log("componentDidMount fetchCategouries");
		this.props.fetchCategouries();

	}
  render() {
    return (
      <div>Hello world! This is the home page route.</div>
    );
  }
}

export default connect(null, { fetchCategouries } )(HomePage);
