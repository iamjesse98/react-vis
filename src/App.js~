import React, { Component } from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis'
import './App.css'
import "../node_modules/react-vis/dist/style.css"
import "../node_modules/react-vis/dist/styles/legends.scss"

class App extends Component {
  render() {
	return(
		<XYPlot width={350} height={350}>
  			<HorizontalGridLines />
  			<LineSeries
    				data={[
      					{x: 1, y: 10},
      					{x: 2, y: 5},
      					{x: 3, y: 15},
					{x: 4, y: 8},
					{x: 5, y: 20}
    				]}/>
  			<XAxis />
  			<YAxis />
		</XYPlot>
		)
	    }
}

export default App
