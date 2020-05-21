import React , {Component} from 'react';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import Skill from './components/Skill/Skill'
import PhoneNav from './components/Navbar/PhoneNav/PhoneNav'
class App extends Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state={
			currentPage : " "
		}
	}
	componentDidMount(){
		this.setState({
			currentPage : "Home"
		})
	}
	handleChange = (newPage) =>{
		this.setState({
			currentPage : newPage
		})
		console.log(this.state.currentPage)
	}
	
  render(){ 
  	var currentComponent
  	switch(this.state.currentPage){
  		case ('About') : currentComponent = <About />
  			break
  		case ('pAbout') : currentComponent = <About />
  			break
  		case 'Work' : currentComponent = <Work />
  			break
  		case 'pWork' : currentComponent = <Work />
  			break
  		case 'Skill' : currentComponent = <Skill />
  			break
  		case 'pSkill' : currentComponent = <Skill />
  			break	
  		default : currentComponent = <Home />	
  	}
  		return (
    		<div className="App">
	      		<Navbar onNavChange = {this.handleChange}/>
				<PhoneNav onNavChange = {this.handleChange} />
	      			{currentComponent}
    	  		<Contact />
    		</div>
  		);
    }
}

export default App;
