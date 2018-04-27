import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Countries extends Component {
  static defaultProps = {
    center: {lat: 16.05, lng: 108.20},
    zoom: 12
  };
 
  render() {
    return (
    	        
    	         <GoogleMapReact
				        bootstrapURLKeys={{ key: ['AIzaSyBHjJfPXFBC8TT7pV_d5Hhva_eB33HuKcc']}}
				        defaultCenter={this.props.center}
				        defaultZoom={this.props.zoom} 
				      >
				        <AnyReactComponent
				          lat={16.054425}
				          lng={108.203272}
				          text={''}
				        />
				  </GoogleMapReact>
    	      
		
     
    );
  }
}
export default Countries;
