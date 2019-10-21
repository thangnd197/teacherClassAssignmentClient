import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class NumClassHorizonBarChart extends React.Component {
  constructor(props) {
    super(props);
    var _dict = props.solution.jsonSolution.assignments.map((element)=>{
      return {
          name: element.teacher.code,
          num_class: element.assignedClasses.length,
          num_credit: element.assignedClasses.reduce((a, b)=> a + b.credit, 0)
        }
    });
    this.state = {
      solution: props.solution.jsonSolution.assignments,
      _dict: _dict,
      data: this.extractDataBar(_dict)
    };
  }

  extractDataBar(_dict) {
    _dict.sort(function(a, b){
      if(a.num_credit < b.num_credit) return 1;
      if(a.num_credit > b.num_credit) return -1;
      return 0;
    });

    var _tmp = _dict.map((e)=>e.name);
    var _data = _dict.map((e)=>e.num_credit);


    var data = {
      labels: _tmp,
      datasets: [
        {
          label: 'Num Credit',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: _data
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <div>
        {/* <canvas id="myChart" width="400" height="400"></canvas> */}
        <HorizontalBar 
          height={1000}
          options={{responsive: true}}
          data={this.state.data}/>
      </div>
    )
  }
}

export default NumClassHorizonBarChart;