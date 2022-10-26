import React , { Component } from 'react'
import Count from './Count/Count'
import Data from './data.js'
import './styles.css'
class About extends Component{
	render(){
		return(
			<div id="about">
				<div className="about-flex container">
					<div className="about-left">
						<img src={require('../../assets/me.jpg')} alt="Kamal Nanda" className="kamal-photo" />
						<h2>Who is this guy ?</h2>
					</div>
					<div className="about-right">
						<h1>I am Kamal Nanda based in Delhi, currently living in Pune. I am working as a SDE - 1 at <a href="www.unboxrobotics.com">Unbox Robotics</a></h1>					
						<div className="count-holder">
							{
								Data.map(( data , index) => {
									return(
										<Count key={index} value={data.value} title={data.title} />
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default About