import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			 <div className="row text-center bg-light ">
				<div className="col-md-3 col-sm-12 footer">
                 <a href="" className="">HOME</a>
                <h6 className="">DISCOVER</h6>
             </div>
             <div className="col-md-2 col-sm-12 footer">
                 <a href="" className="">FAQ</a>
                 <br/>
                 <a href="" className="">Contact</a>
                <h6 className="">SUPPORT</h6>
             </div>
             <div className="col-md-7 footer">
                <h6 className="">&copy;  All Rights Reserved 2018</h6>
             </div>
			</div>
		);
	}
}
export  default Footer;
