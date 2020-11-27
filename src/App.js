import React from 'react';
import Plot from 'react-plotly.js';

class App extends React.Component {
  render() {
    return (
      <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3], marker: {color: 'blue'}},
        ]}
        layout={ {width: 800, height: 800, title: 'Cool Graph'} }
      />
      </div>
    );
  }
}
export default App;