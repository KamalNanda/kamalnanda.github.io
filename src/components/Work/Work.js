import React , { Component } from 'react'
import Navigator from './Navigator/Navigator'
import WorkGrid from './WorkGrid/WorkGrid'
import Data from './data'
import './styles.css'
class Work extends Component{
	constructor(props){
		super(props)
		this.state={
			data : [],
			tag: 'All'
		}
		this.onTagChange = this.onTagChange.bind(this)
	}
	componentDidMount(){
		this.setState({
			data : Data
		})
	}
	onTagChange = (currentTag) => {
		this.setState({
			tag : currentTag
		})
	}
	render(){
		var newList
		if (this.state.tag === "All"){
		    newList = this.state.data
		}
	    else newList = this.state.data.filter(data => {return data.tag.includes(this.state.tag)})
		return(
			<div id="work" className="container">
				<Navigator onTagChange={this.onTagChange}/>
				<WorkGrid data = {newList} /> 
			</div>
		)
	}
}
export default Work