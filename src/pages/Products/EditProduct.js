import React, { Component } from 'react';
import {
     Link
}from 'react-router-dom';
import CategoryStore from '../../stores/CategoryStore';
import * as ProductAction from '../../actions/ProductAction';
class ListCategory extends Component{
    
    render(){
        let {listCategory,handleChangeCategory}= this.props
        return(  
    
                     <div className="form-group"> 
                          <select className="form-control" id="" onChange = {handleChangeCategory}>
                          <option value="NO">Show: All Products</option>
                          <option value="NO1">Show: 1 Products</option>
                          <option value="NO2">Show: 2 Products</option>
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
class EditProduct extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            brand:"",
            category:"",
          listCategory: CategoryStore.getAll()

        }
        this.createProduct = this.createProduct.bind(this)
        this.handleChangeName= this.handleChangeName.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeBrand = this.handleChangeBrand.bind(this)

    }
    createProduct(e) {
      
            ProductAction.createProduct(this.state.name,this.state.category,this.state.brand);
            this.setState({name: "",brand:""});
        
       
    }

    
    handleChangeName(event) {
        this.setState({name: event.target.value});
      
    }
     handleChangeCategory(event) {

        this.setState({category: event.target.value});
        // console.log( event.target.value)
    } 
    handleChangeBrand(event) {
        this.setState({brand: event.target.value});
       
    }

    render() {
        return (
            <div className="category">
               <h3>Add A Product </h3>
               <div className="row">
                 <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="usr">Product Category (*):</label>
                      <ListCategory listCategory={this.state.listCategory} handleChangeCategory={this.state.handleChangeCategory}/>   
                    </div>  
                 </div>
                 <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="usr">Name(*):</label>
                      <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName}/>
                    </div>  
                 </div>             
               </div>
               <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="usr">Brand(*):</label>
                      <input type="text" className="form-control"  value={this.state.brand} onChange={this.handleChangeBrand}/>
                    </div>  
                 </div>
               </div>
                <div className="row">
                  <div className="col-md-4">
                   <div className="form-group">
                      <label htmlFor="usr">Image:</label>
                      <input type="file" className="form-control"  />
                    </div>  
                   </div>  
                                
                </div>
               
               

                <Link to='/products'><button type="button" className="btn btn-cancel">CANCEL</button></Link>
                <button type="button" className="btn btn-dark" onClick={this.createProduct}>SAVE CHANGES</button>
            </div>
        );
    }
}
export default EditProduct;
