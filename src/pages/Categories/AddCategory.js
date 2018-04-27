import React, { Component } from 'react'; 
import {
     Link
}from 'react-router-dom';
import CategoryStore from '../../stores/CategoryStore';
import * as CategoryAction from '../../actions/CategoryAction';


class AddCategory extends Component {
	constructor() {
        super();
        this.state = {name:"" }
        this.createCategory = this.createCategory.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
   
    createCategory(e) {
        e.preventDefault();
        CategoryAction.createCategory(this.state.name);
         this.setState({name: ""});
       
    }

    
    handleChange(event) {
        this.setState({name: event.target.value});
    }
	render() {
		return (
			<div className="category">
			   <h3>Add Product Category</h3>
			   <div className="form-group">
			      <label htmlFor="usr">Type(*):</label>
			      <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange}/>
			    </div>

               <Link to='/category'><button type="button" className="btn btn-cancel">CANCEL</button></Link>
               <button type="button" className="btn btn-dark" onClick={this.createCategory}>SAVE CHANGES</button>
			</div>
		);
	}
}
export default AddCategory;
