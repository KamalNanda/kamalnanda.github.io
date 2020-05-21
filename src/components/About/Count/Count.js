import React , { Component } from 'react'
class Count extends Component{
	render(){
		return(
			<div className="count-element">
				<div className="count-box">
					{this.props.value}
				</div>
				<h2>{this.props.title}</h2>
			</div>
		)
	}
}
export default Count