import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import Pending from './components/pages/Order/Pending';
import History from './components/pages/Order/History';
import UploadOrder from './components/pages/Order/UploadOrder';
import Category from './components/pages/Category';
import Countries from './components/pages/Countries';
import Settings from './components/pages/Settings';
import {
     BrowserRouter as Router,
     Route, 
     Link
}from 'react-router-dom';



class App extends Component {
  render() {
    return (
    
          
      <Router>
              
         <div className="container-fluid">
         <div className="row header ">
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
          
          <div className="row">
             
             <div className="col-lg-2 col-sm-12 sidebar"> 
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
            <div className="col-lg-10 col-sm-12 main-content container-fluid">
                  <Route exact path='/'  component={Dashboard}/>                 
                  <Route path='/dashboard'  component={Dashboard}/>                 
                  <Route path='/login'  component={Login}/>                 
                  <Route path='/pending'    component={Pending}/>
                  <Route path='/history'    component={History}/>
                  <Route path='/uploadorder'    component={UploadOrder}/>
                  <Route path='/Products'    component={Products}/>
                  <Route path='/category'    component={Category}/>
                  <Route path='/countries'    component={Countries}/>
                  <Route path='/settings'    component={Settings}/>
                  
            </div>
         </div>
         <div className="row text-center bg-light ">
             <div className="col-md-2 col-sm-12 footer">
                 <a href="" className="">HOME</a>
                <h6 className="">DISCOVER</h6>
             </div>
             <div className="col-md-2 col-sm-12 footer">
                 <a href="" className="">FAQ</a>
                 <br/>
                 <a href="" className="">Contact</a>
                <h6 className="">SUPPORT</h6>
             </div>
             <div className="col-md-8 footer">
                <h6 className="">&copy;  All Rights Reserved 2018</h6>
             </div>
         </div>

        </div>
      </Router>
      

    );
  }
} 

export default App;


