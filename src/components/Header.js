import React, { Component } from 'react';
import {
     
     Link
}from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
			<nav className="navbar navbar-expand-md  fixed-top ">
            <div className="col-sm-10">
              <Link className="navbar-brand" to="/">ADMIN</Link>
            </div>
            
            
            <div className="dropdown col-sm-2">
                <strong  className="dropdown-toggle" data-toggle="dropdown">
                  Administrator
                </strong>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/settings">Settings</Link>
                  <Link className="dropdown-item" to="/login">Sign Out</Link>
                  
                </div>
            </div>
          </nav>
          </div>
		);
	}
}
export default Header;
