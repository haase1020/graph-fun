import React from 'react';
import Plot from 'react-plotly.js';

class PrendaGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: [], layout: {}, frames: [], config: {}};
  }
    render() {
      return (
        <Plot
          data={
            [
            {
              x: ["2020-08-01","2020-08-02","2020-08-03","2020-08-04","2020-08-05","2020-08-06","2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17","2020-08-18","2020-08-19","2020-08-20","2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28","2020-08-29","2020-08-30","2020-08-31","2020-09-01","2020-09-02","2020-09-03","2020-09-04","2020-09-05","2020-09-06","2020-09-07","2020-09-08","2020-09-09","2020-09-10","2020-09-11","2020-09-12","2020-09-13","2020-09-14","2020-09-15","2020-09-16","2020-09-17","2020-09-18","2020-09-19","2020-09-20","2020-09-21","2020-09-22","2020-09-23","2020-09-24","2020-09-25","2020-09-26","2020-09-27","2020-09-28","2020-09-29","2020-09-30","2020-10-01","2020-10-02","2020-10-03","2020-10-04","2020-10-05","2020-10-06","2020-10-07","2020-10-08","2020-10-09","2020-10-10","2020-10-11","2020-10-12","2020-10-13","2020-10-14","2020-10-15","2020-10-16","2020-10-17"],
              y: [196,203,203,468,545,556,573,586,586,584,1007,1069,1092,1112,1109,1098,1098,1946,2065,2164,2184,2208,2204,2198,2638,2710,2755,2790,2799,2793,2791,3073,3159,3183,3196,3211,3212,3169,3231,3385,3407,3452,3460,3438,3433,3590,3602,3626,3633,3643,3636,3628,3710,3715,3716,3713,3718,3710,3705,3748,3760,3769,3768,3771,3762,3760,3823,3837,3835,3826,3831,3818,3814,3871,3872,3880,3880,3883],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color:'#ab63fa'},
              name: 'Line',
              // line: {color: 'blue'},
              showlegend: true,
              displaylogo: false,
              displayModeBar: false
            },
          ]
        }
          layout={
             {width: 1400, height: 900,font: {size: 28},
             title: "Students Enrolled"}}
              config={{responsive: true,
                displayModeBar: false
              }}
            
          style= {
            {position: 'relative'}
          }    
            
        />
      );
    }
  }
  export default PrendaGraph;