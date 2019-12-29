import React from 'react';
import {Bar} from 'react-chartjs-2';

class NumCreditBarChart extends React.Component {
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
    const num_credits = _dict.map((a)=>a.num_credit);
    const max_num_class = Math.max(...num_credits);
    const min_num_class = Math.min(...num_credits);
    var _labels = {};
    var _tmp = [];
    for (var i = min_num_class; i <= max_num_class; i++) {
      _tmp.push(i);
      _labels[i] = 0;
    }
    for (var k in num_credits) {
      _labels[num_credits[k]] += 1;
    }
    var _data = [];
    for (i in _tmp) {
      _data.push(_labels[_tmp[i]]);
    }

    var data = {
      labels: _tmp,
      datasets: [
        {
          label: 'Số giảng viên',
          backgroundColor: '#6384FF',
          borderColor: '#6384FF',
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
        <Bar 
          options={
            {
              responsive: true,
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: "Số giảng viên",
                      fontSize: 24
                    },
                    ticks: {
                        suggestedMax: 25,    // minimum will be 0, unless there is a lower value.
                        fontSize: 20
                    },
                }],
                xAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Số tính chỉ",
                    fontSize: 24
                  },
                  ticks: {
                      fontSize: 20
                  },
              }]
            }
            }
          }
          data={this.state.data}/>
      </div>
    )
  }
}

export default NumCreditBarChart;