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
						<h1>I am Kamal Nanda based in Delhi. I'm persuing BCA from Vivekananda Institute of Professional Studies. I have a good experience in Web Development and can make modern looking, responsive websites.</h1>					
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