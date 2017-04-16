import React, { Component } from 'react'
import { RadialChart } from 'react-vis'
import './App.css'
import "../node_modules/react-vis/dist/style.css"
import "../node_modules/react-vis/dist/styles/legends.scss"

let myData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only'} ]

let yourData = [{angle: 1}, {angle: 5}, {angle: 2}]

class App extends Component {
  render() {
	return(
		<div>
		<RadialChart
  			data={myData}
  			width={300}
  			height={300} />
		<RadialChart
  			data={yourData}
  			width={300}
  			height={300} />
		</div>
		)
	    }
}

export default App
