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
          <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <div className="col-sm-10">
              <Link className="navbar-brand" to="">ADMIN</Link>
            </div>
            
            
            <div className="dropdown col-sm-2">
                <h4  className="dropdown-toggle" data-toggle="dropdown">
                  Administrator
                </h4>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/settings">Settings</Link>
                  <Link className="dropdown-item" to="/login">Sign Out</Link>
                  
                </div>
            </div>
          </nav>
          
         </div>
          
          <div className="row ">
             
             <div className="col-sm-2 sidebar"> 
               <nav className="navbar ">
                <ul className="navbar-nav">
                  
                  <li className="nav-item"><Link className="nav-link" to="/"><i class="fa fa-home font-awesome"></i>Dashboard</Link></li> 
                  <li className="nav-item"><Link className="nav-link dropdown dropdown-toggle" id="navbardrop" data-toggle="dropdown" to="/order"><i class="fa fa-bars font-awesome"></i>Order</Link>
                       <div class="dropdown-menu">
                          <Link className="dropdown-item" to="/pending"><i class="fas fa-spinner font-awesome"></i>Pending</Link>
                          <Link className="dropdown-item" to="/history"><i class="fas fa-history font-awesome"></i>History</Link>
                          <Link className="dropdown-item" to="/uploadorder"><i class="fas fa-upload font-awesome"></i>Upload Order</Link>
                       </div>
                  </li> 
                  <li className="nav-item "><Link className="nav-link" to="/products"><i class="fab fa-product-hunt font-awesome"> </i>Products</Link></li> 
                  <li className="nav-item"><Link className="nav-link" to="/category"><i class="fas fa-chart-pie font-awesome"></i>Category</Link></li> 
                  <li className="nav-item"><Link className="nav-link" to="/countries"><i class="fas fa-map-marker-alt font-awesome"></i>Countries</Link></li> 
                  <li className="nav-item"><Link className="nav-link" to="/settings"><i class="fa fa-cog font-awesome"></i>Settings</Link></li> 
                </ul> 
              </nav>
            </div>
            <div className="col-sm-10 ">
                  <Route exact path='/'  component={Dashboard}/>                 
                  <Route exact path='/Dashboard'  component={Dashboard}/>                 
                  <Route exact path='/login'  component={Login}/>                 
                  <Route path='/pending'    component={Pending}/>
                  <Route path='/history'    component={History}/>
                  <Route path='/uploadorder'    component={UploadOrder}/>
                  <Route path='/Products'    component={Products}/>
                  <Route path='/category'    component={Category}/>
                  <Route path='/countries'    component={Countries}/>
                  <Route path='/settings'    component={Settings}/>
            </div>
         </div>
         <div className="row text-center bg-light">
             <div className="col-sm-4">
                <p className="">DISCOVER</p>
             </div>
             <div className="col-sm-4">
                <p className="">DISCOVER</p>
             </div>
             <div className="col-sm-4">
                <p className="">DISCOVER</p>
             </div>
         </div>

        </div>
      </Router>
      

    );
  }
} 

export default App;
