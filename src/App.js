import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/animate.min.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.scss';
import './assets/css/style.scss';
import './assets/js/main.js';
import Sidebar from './components/sidebar';
import About from './components/about';
import Skill from './components/skills';
import Education from './components/education';
import Company from './components/company';
import Work from './components/work';
import Contact from './components/contact';

class App extends Component {
   	render() {
      	return (
      		<Router>
				<div id="colorlib-page">
					<div className="container-wrap">
						<a href="onClick={e => {e.preventDefault() onClick()}}" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<i/>
						</a>

						<Sidebar />

						<div id="colorlib-main">
							<Route exact path='/' component={About} />
						
							<Route exact path='/Skills' component={Skill} />

							<Route exact path='/Education' component={Education} />

							<Route exact path='/Company' component={Company} />
						
							<Route exact path='/Work' component={Work} />

							<Route exact path='/Contact' component={Contact} />
						</div>
					</div>
				</div>
			</Router>
      	);
   	}
}

export default App;
