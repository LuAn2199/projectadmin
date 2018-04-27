import React, { Component } from 'react'; 
import {
     Link
}from 'react-router-dom';
import CategoryStore from '../stores/CategoryStore';
import * as CategoryAction from '../actions/CategoryAction';
import {orderBy} from 'lodash';



class ListCategory extends Component {
	
	render() {
		let {listCategory,delCategory }= this.props
		return (
			<div>
			    {listCategory.map((v) =>{

			    	return (
 					   <div className="row listCategory" key={v.id}>
 					     <div className="col-sm-10 ">{v.name}</div>
 					     <div className="col-sm-2">
					      <div className="dropdown">
							  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
							    ACTION
							  </button>
							  <div className="dropdown-menu">
							    <button className="dropdown-item" >Edit</button>
							    <button className="dropdown-item" value={v.id} onClick={delCategory} >Delete</button>
							    
							  </div>
						  </div>
 					     </div>
 					   </div>
			    		);

			    	})
			    }
			    
				
			</div>
		);
	}
}

class Category extends Component{
	
	constructor() {
        super();
        this.state = {
        	
          listCategory: CategoryStore.getAll()
          
        }
        
    this.sort = this.sort.bind(this)
       
    }
    componentWillMount() {
        CategoryStore.on("change", () => {
            this.setState({listCategory: CategoryStore.getAll()});

        })

    }
    
    delCategory(e) {
        e.preventDefault();
        let id = e.target.value;
        CategoryAction.delCategory(id);

    }

  

    sort(e){
    	if(e.target.value == "A-Z"){
      	
      	this.setState({
      		listCategory: orderBy(this.state.listCategory,['name'], ['asc'])
      	});      	
      	}
    	if(e.target.value == "Z-A"){
    		this.setState({
      		listCategory: orderBy(this.state.listCategory,['name'], ['desc'])
      	});
    	}
    	
    	
    }
    

	render() {


		return (
			
		
			  <div className="category">

				 <div className="row ">
				   <div className="col-md-10">
 					 <h3 className="col-md-10">Manage Product Categories</h3>
				   </div>
				   <div className="col-md-2">
				   
					 <Link to='/addcategory'><button type="button" className="btn bg-light">ADD A CATEGORY</button></Link>
				   </div>								
			  	</div>
			  	<div className="row ">
			  	   <div className="col-md-3">
			  	      <div className="form-group"> 
					      <select className="form-control" id="" onChange={this.sort} >
					       
					        <option value="A-Z"> Sort: A-Z</option>
					        <option value="Z-A"> Sort: Z-A</option>
					      </select>
			  	   	  </div>			
			  	   </div>
			  	 </div>
			  	<div className="main-category">
			  		<h4>Name</h4>
			  	</div>
			  	<ListCategory listCategory={this.state.listCategory} delCategory={this.delCategory.bind(this)}/>
			  	
			  </div>
			    
	   				
		
			   
			
		);
	}
}
export default Category;