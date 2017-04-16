import React, { Component } from 'react'
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force'
import './App.css'
import "../node_modules/react-vis/dist/style.css"
import "../node_modules/react-vis/dist/styles/legends.scss"

class App extends Component {
  render() {
	return(
		<div>
<ForceGraph simulationOptions={{ height: 300, width: 300 }}>
  <ForceGraphNode node={{ id: 'first-node' }} fill="red" />
  <ForceGraphNode node={{ id: 'second-node' }} fill="blue" />
  <ForceGraphNode node={{ id: 'third-node' }} fill="deeppink" />
  <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
  <ForceGraphLink link={{ source: 'third-node', target: 'second-node' }} />
</ForceGraph>
		</div>
		)
	    }
}

export default App
