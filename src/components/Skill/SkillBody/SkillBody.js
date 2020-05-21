import React , { Component } from 'react'
class SkillBody extends Component{
	render(){
		return(
			<div className="skill-body">
				<h1>{this.props.title} : </h1>
				<div className="meter-body">
					<img src={this.props.imgLink} alt={this.props.title} className="skill-logo" />
					<div className="meter-container">
						<div className="meter" style={{ width : `${this.props.meter}` , animation : `${this.props.animation}` }}>{this.props.meter}</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SkillBody