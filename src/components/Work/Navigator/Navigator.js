import React , { Component } from 'react'
class Navigator extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state={
			previousId : "All"
		}
	}
	handleClick =(currentId) => {
		this.props.onTagChange(currentId)
		var current = document.getElementById(currentId)
		var previous = document.getElementById(this.state.previousId)
		previous.classList.remove('nav-active')
		current.classList.add('nav-active')
		this.setState({
			previousId : currentId
		})
	}
	render(){
		return(
			<div className="navigator">
				<span id="All" className="navigator-element nav-active" onClick = {() => this.handleClick('All')}>ALL</span>
				<span id="Professional" className="navigator-element" onClick = {() => this.handleClick('Professional')}>PROFESSIONAL</span>
				<span id="Personal" className="navigator-element" onClick = {() => this.handleClick('Personal')}>PERSONAL</span>
				<span id="React" className="navigator-element" onClick = {() => this.handleClick('React')}>REACT.JS</span>
				<span id="Javascript" className="navigator-element" onClick = {() => this.handleClick('Javascript')}>JAVASCRIPT</span>
				<span id="Photoshop" className="navigator-element" onClick = {() => this.handleClick('Photoshop')}>PHOTOSHOP</span>
				<span id="UiUx" className="navigator-element" onClick = {() => this.handleClick('UiUx')}>UI/UX DESIGNING</span>
			</div>
		)
	}
}
export default Navigator 