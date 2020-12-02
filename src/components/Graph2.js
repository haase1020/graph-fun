import React from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

class Graph2 extends React.Component {

  constructor(){
    super()
    this.state = {
      chart: {}
    }
  }

  

  componentDidMount(){
    const url = '/charts/enrollments'
    axios.get(url)
    .then((res)=>{
      this.setState({
        ...this.state,
        chart: res.data
      })
    })
    .catch(()=>{
      alert('Failed to get the data 😭')
    })
  }
    
  render() {
      return <Plot {...this.state.chart} />
    }
  }

  export default Graph2;