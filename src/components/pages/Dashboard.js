import React, { Component } from 'react';
class Dashboard extends Component{


	render() {
		return (
		
		<div className="">
		   <h3>Sales</h3>
		   <div className="chart">
		           <h5>Reveune</h5>				  
				  <ul className="nav nav-tabs" role="tablist">
				    <li className="nav-item">
				      <a className="nav-link active" data-toggle="tab" href="#7days-reveune"><p>7 DAYS</p> </a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#month-reveune"><p>LAST MONTH</p></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#year-reveune"><p>THIS YEAR</p></a>
				    </li>
				  </ul>				
				  <div className="tab-content">
				    <div id="7days-reveune" className="container tab-pane active">
				      <canvas id="myChart" width="400" height="320"></canvas>
				    </div>
				    <div id="month-reveune" className="container tab-pane fade">
				      <canvas id="myChart" width="400" height="320"></canvas>
				    </div>
				    <div id="year-reveune" className="container tab-pane fade">
				      <canvas id="myChart" width="400" height="320"></canvas>
		    		</div>
		  		  </div>
		   </div>
		   <div className="chart">
		           <h5>Orders</h5>				  
				  <ul className="nav nav-tabs" role="tablist">
				    <li className="nav-item">
				      <a className="nav-link active" data-toggle="tab" href="#7days-order"><p>7 DAYS</p></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#month-order"><p>LAST MONTH</p></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#yearorder"><p>THIS YEAR</p></a>
				    </li>
				  </ul>				
				  <div className="tab-content">
				    <div id="7days-oder" className="container tab-pane active">
				      <canvas id="myChart" width="400" height="300"></canvas>
				    </div>
				    <div id="month-order" className="container tab-pane fade">
				      <canvas id="myChart" width="400" height="320"></canvas>
				    </div>
				    <div id="year-order" className="container tab-pane fade">
				      <canvas id="myChart" width="400" height="320"></canvas>
		    		</div>
		  		  </div>
		   </div>
		   <div className="chart">
		           <h5>Products</h5>				  
				  <ul className="nav nav-tabs" role="tablist">
				    <li className="nav-item">
				      <a className="nav-link active" data-toggle="tab" href="#7days-product"><p>7 DAYS</p></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#month-product"><p>LAST MONTH</p></a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#year-product"><p>THIS YEAR</p></a>
				    </li>
				  </ul>				
				  <div className="tab-content">
				    <div id="7days-product" className="container tab-pane active">
				      <canvas id="myChart" width="400" height="400"></canvas>
				    </div>
				    <div id="month-product" className="container tab-pane fade">
				      <canvas id="myChart" width="400" height="320"></canvas>
				    </div>
				    <div id="year-product" className="container tab-pane fade">
				      <canvas id="myChart" width="400" height="320"></canvas>
		    		</div>
		  		  </div>
		   </div>


		</div>
			
			
		);
	}
}
export default Dashboard;