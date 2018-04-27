import React, { Component } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Pending from './pages/Order/Pending';
import History from './pages/Order/History';
import UploadOrder from './pages/Order/UploadOrder';
import Category from './pages/Category';
import AddCategory from './pages/Categories/AddCategory';
import AddProduct from './pages/Products/AddProduct';
import EditProduct from './pages/Products/EditProduct';
import Countries from './pages/Countries';
import Settings from './pages/Settings';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

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
           <Header/>
          
         </div>
          
          <div className="row">
             
            <div className="col-lg-2 col-sm-12 sidebar"> 
               <SideBar/>
            </div>
            <div className="col-lg-10 col-sm-12 main-content container-fluid">
                  <Route exact path='/'  component={Dashboard}/>                 
                  <Route path='/dashboard'  component={Dashboard}/>                 
                  <Route path='/login'  component={Login}/>                 
                  <Route path='/pending'    component={Pending}/>
                  <Route path='/history'    component={History}/>
                  <Route path='/uploadorder'    component={UploadOrder}/>
                  <Route path='/products'    component={Products}/>
                  <Route path='/category'    component={Category}/>
                  <Route path='/countries'    component={Countries}/>
                  <Route path='/settings'    component={Settings}/>
                  <Route path='/addcategory'    component={AddCategory}/>
                  <Route path='/addproduct'    component={AddProduct}/>
                  <Route path='/editproduct'    component={EditProduct}/>
                  
            </div>
         </div>
        
         <Footer/>
         

        </div>
      </Router>
      

    );
  }
} 

export default App;


