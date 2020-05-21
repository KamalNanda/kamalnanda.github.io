import React , { Component } from 'react'
import Work from '../Work/Work'
class WorkGrid extends Component{
	render(){
		const data = this.props.data
		return(
			<div className="work-grid">
				{
					data.map(( data , index ) => {
						return(
							<a href={data.link}  rel="noopener noreferrer" key={index} target="_blank" >
								<Work 
									id={data.id} 
									imgLink={data.imgLink}
									title={data.overlayTitle}
									tech= {data.tech}
								/>
							</a>
						)
					})
				}
			</div>
		)
	}
}
export default WorkGrid