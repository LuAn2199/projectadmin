import React, { Component } from 'react';
import {
     
     Link
}from 'react-router-dom';

class SideBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar ">
                <ul className="navbar-nav">
                  
                  <li className="nav-item"><Link className="nav-link link-active" to="/"><i className="fa fa-home font-awesome"></i>Dashboard</Link></li> 
                  <li className="nav-item">
                    <Link to="/order"className="nav-link link-active" data-toggle="collapse" data-target="#order"><i className="fa fa-bars font-awesome"></i>Order</Link>
                    <div id="order" className="collapse sub-link">
                      <Link className="nav-link link-active" to="/pending">Pending</Link>
                      <Link className="nav-link link-active" to="/history">History</Link>
                      <Link className="nav-link link-active" to="/uploadorder">Upload Order</Link>
                    </div>  
                  </li>
                  <li className="nav-item "><Link className="nav-link link-active" to="/products"><i className="fab fa-product-hunt font-awesome"> </i>Products</Link></li> 
                  <li className="nav-item"><Link className="nav-link link-active" to="/category"><i className="fas fa-chart-pie font-awesome"></i>Category</Link></li> 
                  <li className="nav-item"><Link className="nav-link link-active" to="/countries"><i className="fas fa-map-marker-alt font-awesome"></i>Countries</Link></li> 
                  <li className="nav-item"><Link className="nav-link link-active" to="/settings"><i className="fa fa-cog font-awesome"></i>Settings</Link></li> 
                </ul> 
              </nav>
			</div>
		);
	}
}
export default SideBar;