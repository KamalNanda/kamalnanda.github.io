import React , {Component} from 'react'
class PhoneNav extends Component{

		constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state={
			previousId : "pHome"
			}
		}
		handleClick =(currentId) => {
		this.props.onNavChange(currentId)
		var phoneNav = document.getElementById('PhoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		phoneNav.style.animation = "moveUp 2s"
		setTimeout(()=>{
			phoneNav.style.display="none"
			hamburger.style.display = "block"
			navClose.style.display = "none"
		},2000)
		var current = document.getElementById(currentId)
		var previous = document.getElementById(this.state.previousId)
		previous.classList.remove('active')
		current.classList.add('active')
		this.setState({
			previousId : currentId
		})
	}
	render(){
		return(
			<div id="PhoneNav">
				<div className="phone-nav">
					<span id="pHome" className="navbar-element active" onClick = {() => this.handleClick('pHome')}>HOME</span>
					<span id="pAbout" className="navbar-element" onClick = {() => this.handleClick('pAbout')}>ABOUT</span>
					<span id="pWork" className="navbar-element" onClick = {() => this.handleClick('pWork')} >WORK</span>
					<span id="pSkill" className="navbar-element" onClick = {() => this.handleClick('pSkill')}>SKILLS</span>
					<span className="navbar-element" ><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1nb6HcqTbt7kPaWqB5dolvuanOKE-eUEx/view">RESUME</a></span>
				</div>
			</div>
		)
	}
}
export default PhoneNav