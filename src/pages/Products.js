import React, { Component } from 'react'; 
import {
    
     Link
}from 'react-router-dom';
import CategoryStore from '../stores/CategoryStore';
import ProductStore from '../stores/ProductStore';
import * as ProductAction from '../actions/ProductAction';
import {orderBy,filter} from 'lodash';


class ListProducts extends Component {

	render() {
		let {listProducts,delProduct} = this.props
		return (
			<div>
			    {listProducts.map((v) =>{
			    	return (
 					   <div key={v.name}className="row listCategory text-center">
                            
					  	    <div className="col-sm-3 col-xs-3"><h6>{v.thumb}</h6></div>
					  	    <div className="col-sm-3 col-xs-3"><h6>{v.name}</h6></div>
					  	    <div className="col-sm-2 col-xs-2"><h6>{v.category}</h6></div>
					  	    <div className="col-sm-2 col-xs-2"><h6>{v.brand}</h6></div>
					  	    <div className="col-sm-2 col-xs-2"> 
						  	   <div className="dropdown">
								  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
								    ACTION
								  </button>
								  <div className="dropdown-menu">
								    <Link to="/editproduct"><button className="dropdown-item" >Edit</button></Link>
								    <button className="dropdown-item" value={v.id} onClick={delProduct} >Delete</button> 
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
class ListCategory extends Component{
	
    render(){
    	let {listCategory,filterByCategory}= this.props
    	return(  
    
    		         <div className="form-group"> 
					      <select className="form-control" id="" onChange={filterByCategory}>
					      <option value="All">Show: All Products</option>
						   {listCategory.map((v,i)=>{
			    	        	return(
			    	        	 <option key={i} value={v.name}>{v.name}</option>

			    	        	 );

			    			  })
			    			}	
					      </select>
			  	   	  </div>		
    	        	 	

    )

}
}
class ListBrand extends Component{
	
    render(){
    	let {listBrand}= this.props
    	return(  
    
    		         <div className="form-group"> 
					      <select className="form-control" id="">
					      <option>Show: All Brand</option>
						   {listBrand.map((v,i)=>{
			    	        	return(
			    	        	 <option key={i}  >{v.brand}</option>
			    	        	 );
			    			  })
			    			}	
					      </select>
			  	   	  </div>		
    	        	 	

    )

}
}
class Products extends Component{
	constructor() {
        super();
        this.state = {
          listProducts: ProductStore.getAll(),
          listCategory: CategoryStore.getAll(),
          listBrand: ProductStore.getAll(),
          filCate:"All"
        }
        this.delProduct = this.delProduct.bind(this)
        this.sort = this.sort.bind(this)
        this.filterByCategory = this.filterByCategory.bind(this)

    }
     componentWillMount() {
        ProductStore.on("change", () => {
            this.setState({listProducts: ProductStore.getAll()});

        })

    }
   

    delProduct(e) {
        e.preventDefault();
        let id = e.target.value;
        ProductAction.delProduct(id);
       console.log(id)

    }
    sort(e){
    	if(e.target.value == "A-Z"){
      	
      	this.setState({
      		listProducts: orderBy(this.state.listProducts,['name'], ['asc'])
      	});      	
      	}
    	if(e.target.value == "Z-A"){
    		this.setState({
      		listProducts: orderBy(this.state.listProducts,['name'], ['desc'])
      	});
    	}
    	
    	
    }
    filterByCategory(e){
    	this.setState({
    		filCate: e.target.value
    	})
    
    	

    }


	render() {
		let {listProducts} = this.state
		if(this.state.filCate=="All"){
			listProducts = this.state.listProducts
		}
		else{
			listProducts = filter(listProducts,{'category': this.state.filCate})
			
		}
		

		return (
		
			<div >  
			  <div className="category">

				 <div className="row ">
				   <div className="col-md-10">
 					 <h3 className="col-md-10">Manage Products</h3>
				   </div>
				   <div className="col-md-2">
				   
					 <Link to='/addproduct'><button type="button" className="btn bg-light">ADD A PRODUCTS</button></Link>
				   </div>								
			  	</div>
			  	<div className="row ">
			  	   <div className="col-md-3">
			  	      <div className="form-group"> 
					      <select className="form-control"  onChange={this.sort}>
					       
					        <option value="A-Z">Sort: A-Z</option>
					        <option value="Z-A">Sort: Z-A</option>
					      </select>
			  	   	  </div>			
			  	   </div>
				   <div className="col-md-3">
			  	      <div className="form-group"> 
					      <select className="form-control" >
					        <option>Sort: Date, Newest-Oldest</option>
					        <option>Sort: Date, Oldest-Newest</option>
					        
					      </select>
			  	   	  </div>			  	
				   </div>
				   <div className="col-md-3">
			  	      
					      <ListCategory listCategory={this.state.listCategory} filterByCategory={this.filterByCategory}/>      
					     		  	
				   </div>
				   <div className="col-md-3">
			  	      
			  	      <ListBrand listBrand={this.state.listBrand}/>	  	
				   </div>
			  	</div>
			  	<div className="row text-center main-category">
			  	    <div className="col-sm-3 col-xs-3"><h6 className="title-list">Thumb</h6></div>
			  	    <div className="col-sm-3 col-xs-3"><h6 className="title-list">Name</h6></div>
			  	    <div className="col-sm-2 col-xs-2"><h6 className="title-list">Category</h6></div>
			  	    <div className="col-sm-2 col-xs-2"><h6 className="title-list">Brand</h6></div>
			  	    <div className="col-sm-2 col-xs-2"><h6 className="title-list"></h6></div>
			  		
			  	</div>
			  	<ListProducts listProducts={listProducts} delProduct={this.delProduct}/>

			  </div>
			      
	   				
			</div>
		
		);
	}
}
export default Products;