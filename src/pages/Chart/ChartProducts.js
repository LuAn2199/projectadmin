import React, { Component } from 'react';
import Chartjs from './Chartjs';


class ChartRevenue extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['2018-4-12', '2018-4-14', '2018-4-15', '2018-4-17', '2018-4-18', '2018-4-19'],
        datasets:[
          {
            label:'Products',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:
              
              'rgba(75, 192, 192, 0.6)'
              
            
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        
        <Chartjs  chartData={this.state.chartData} />
      </div>
    );
  }
}

export default ChartRevenue;