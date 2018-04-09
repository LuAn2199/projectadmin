import React, { Component } from 'react';
class Settings extends Component{

	render() {
		return (
			<div >  
			   <div className="row"> 
			        <div className="col-lg-4 col-xs-12 ">
			          <h6>Email address:</h6>
			            
			        </div>
			        <div className="col-lg-4 col-xs-12">
			          <h6>admin@gmail.com</h6>
			        </div>

		      </div>
		      <div className="row"> 
			        <div className="col-lg-4 col-xs-12">
			          <h6 >Password</h6>
			            
			        </div>
			        <div className="col-lg-4 col-xs-12">
			          <h6>*******</h6>
			          
			        </div>
		        
		      </div>
		      
		      <div className="row">
		        <div className="col-lg-4 col-xs-12">
		          <h6 >Old Password:</h6>
		        </div>

		        <div className="col-lg-4 col-xs-12">
		          <div className="form-group">
		      
		          <input type="password" className="form-control"  placeholder="Old password"/>
		          </div>
		        </div>
		      </div>
		       <div className="row">
		        <div className="col-lg-4 col-xs-12">
		          <h6 >New Password:</h6>
		        </div>

		        <div className="col-lg-4 col-xs-12">
		          <div className="form-group">
		      
		          <input type="password" className="form-control"  placeholder="New password" />
		          </div>
		        </div>
		      </div> 
		      <div className="row">
		        <div className="col-lg-4 col-xs-12">
		          <h6 >Re-enter Password:</h6>
		        </div>

		        <div className="col-lg-4 col-xs-12">
		          <div className="form-group">
		      
		          <input type="password" className="form-control"  placeholder="Re-enter password" name="pwd"/>
		          </div>
		        </div>
		      </div>
		      <div className="row">
		        <div className="col-lg-4 col-xs-12 offset-lg-4 ">
		         <button className="btn btn-secondary">Save change</button>
		        </div>
		      </div>			
			</div>
		);
	}
}
export default Settings;