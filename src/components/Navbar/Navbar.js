import React , { Component } from 'react'
import './styles.css'
class Navbar extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.onHamburgerClick = this.onHamburgerClick.bind(this)
		this.onCloseClick = this.onCloseClick.bind(this)
		this.state={
			previousId : "Home"
		}
	}
	handleClick =(currentId) => {
		this.props.onNavChange(currentId)
		var current = document.getElementById(currentId)
		var previous = document.getElementById(this.state.previousId)
		previous.classList.remove('active')
		current.classList.add('active')
		this.setState({
			previousId : currentId
		})
	}
	onHamburgerClick = () =>{
		var phoneNav = document.getElementById('PhoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		var contact = document.getElementById('contact')
		phoneNav.style.animation = "moveDown 2s"
		phoneNav.style.display = "block"
		hamburger.style.display = "none"
		navClose.style.display = "block"
		phoneNav.style.zIndex = "9"
		contact.style.zIndex = "-1"
	}
	onCloseClick = () =>{
		var phoneNav = document.getElementById('PhoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		var contact = document.getElementById('contact')	
		phoneNav.style.animation = "moveUp 2s"
		setTimeout(()=>{
			phoneNav.style.display="none"
			hamburger.style.display = "block"
			navClose.style.display = "none"
			contact.style.zIndex = "1"
		},2000)
	}
	render(){
		return(
			<>
			<div className="navbar-desktop">
			<img className="logo" src="https://ik.imagekit.io/hbj42mvqwv/favicon_9aiWRECIB.png" alt="logo" />
			<div className="navbar desktop">
				<span id="Home" className="navbar-element active" onClick = {() => this.handleClick('Home')}>HOME</span>
				<span id="About" className="navbar-element" onClick = {() => this.handleClick('About')}>ABOUT</span>
				<span id="Work" className="navbar-element" onClick = {() => this.handleClick('Work')} >WORK</span>
				<span id="Skill" className="navbar-element" onClick = {() => this.handleClick('Skill')}>SKILLS</span>
				<span className="navbar-element" ><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1nb6HcqTbt7kPaWqB5dolvuanOKE-eUEx/view">RESUME</a></span>
			</div>
			</div>
			<div className="navbar-phone">
				<div id="hamburger" onClick={this.onHamburgerClick}>
					<div className="hamburger-bar"></div>
					<div className="hamburger-bar"></div>
					<div className="hamburger-bar"></div>
				</div>
				<img alt="close" src='https://ik.imagekit.io/hbj42mvqwv/close_jpFLuKZyl.png' onClick={this.onCloseClick} id="navClose"/>
			</div>
		</>
		)
	}
}
export default Navbar