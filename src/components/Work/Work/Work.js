import React , { Component } from 'react'
class Work extends Component{
	

	render(){
		const imgLink = this.props.imgLink
		return(
			<div className="work-img">
				<img src={imgLink} className="work-photo" alt={this.props.key} onMouseEnter={()=> this.onHoverImage(this.props.id)}/>
				<div className="work-overlay" id={this.props.id}>
					<h2>{this.props.title}</h2>
					<h4>{this.props.tech}</h4>
				</div>
			</div>
		)
	}
}
export default Work