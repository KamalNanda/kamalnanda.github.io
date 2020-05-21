import React , { Component } from 'react'
import SkillBody from './SkillBody/SkillBody'
import Data from './data.js'
import './styles.css'
class Skill extends Component{
	render(){
		return(
			<div className="container" id="skill">
				{
					Data.map(( data , index ) => {
						return <SkillBody 
									key={index} 
									animation={data.animation} 
									title={data.title} 
									imgLink={data.imgLink} 
									meter={data.meter} 
								/>
					})
				}
			</div>
		)
	}
}
export default Skill