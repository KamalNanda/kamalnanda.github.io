import React , { Component } from 'react'
import './styles.css'
class Home extends Component{
	render(){
		return(
			<div id="homepage">
				<div className="heading-holder">
					<h1 style={{animation : 'moveLeft 2s'}} className="home-header">Hello, I'm <span>Kamal Nanda</span></h1>
					<h1 style={{animation : 'moveRight 2s'}} className="home-header">I'm a Front-end Web Developer</h1>
				</div>
			</div>
		)
	}
}
export default Home