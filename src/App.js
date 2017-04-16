import React, { Component } from 'react'
import { Sankey } from 'react-vis'
import './App.css'
import "../node_modules/react-vis/dist/style.css"
import "../node_modules/react-vis/dist/styles/legends.scss"

const nodes = [{name: 'a', color: 'purple'}, {name: 'b'}, {name: 'c', color: 'deeppink'}]
const links = [
  {source: 0, target: 1, value: 10, color: 'orange', opacity: .7, key: 'Jesse'},
  {source: 0, target: 2, value: 20, color: 'deepskyblue', key: 'Anna'},
  {source: 1, target: 2, value: 15, color: 'yellow', key: 'Max'}
]

class App extends Component {
  render() {
	return(
		<div>
<Sankey
  nodes={nodes}
  links={links}
  width={200}
  height={200}
/>
		</div>
		)
	    }
}

export default App
